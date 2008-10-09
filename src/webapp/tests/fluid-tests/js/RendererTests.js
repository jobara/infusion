fluid.tests = fluid.tests || {};

(function($) {

  fluid.tests.testParser = function() {
    var deepEqTests = new jqUnit.TestCase("Deep Equivalence Tests");
    
    deepEqTests.test("Test", function () {
      jqUnit.assertDeepEq("eq1", {p1: "thing1"}, {p1: "thing1"});
      jqUnit.assertDeepNeq("eq2", {p1: "thing1"}, {p2: "thing1"});
      jqUnit.assertDeepNeq("eq3", {p1: "thing1"}, null);
      jqUnit.assertDeepNeq("eq4", null, {p1: "thing1"});
      jqUnit.assertDeepEq("eq5", null, null);
      jqUnit.assertDeepEq("eq6", undefined, undefined);
      jqUnit.assertDeepNeq("eq7", {p1: "thing1", p2: "thing"}, {p1: "thing1"});
      jqUnit.assertDeepNeq("eq8", {p1: "thing1"}, {p1: "thing1", p2: "thing"});
      jqUnit.assertDeepEq("eq9", [1, 2], [1, 2]);
      jqUnit.assertDeepNeq("eq10", [1, 2], [1, 2, 3]);
      jqUnit.assertDeepNeq("eq11", [1, [2,3,4]], [1, [2,3,4, 5]]);
      jqUnit.assertDeepEq("eq12", [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
        
      });
      
    var parserTests = new jqUnit.TestCase ("Selector Parser Test");
    
    parserTests.test("Test", function() {
      var tree = fluid.parseSelector("  div span#id  > .class");
      jqUnit.assertEquals("treeLength", 3, tree.length);
      var expected = [
         {predList: [{tag: "div"}]}, 
         {predList: [{tag: "span"}, {id: "id"} ], child: true},
         {predList: [{clazz: "class"}]}
         ];
      jqUnit.assertDeepEq("Misparse: Tree was " + JSON.stringify(tree), expected, tree);
    
      });
    
    var renderTests = new jqUnit.TestCase ("Selector Render Test");
    
    renderTests.test("Selector-based render test", function() {
      var tree = {"header:": []};
      var reps = 5;
      for (var i = 0; i < reps; ++ i) {
        tree["header:"][i] = i + 1;
        }
      var templates = fluid.selfRender($("#table-header"), tree, 
        { cutpoints: [{selector: "th.column-header", id: "header:"}]
      });
      
      var rendered = $("#table-header").get(0).innerHTML;
      
      var lumps = templates[0].lumps;
      var found = false;
      
      for (var i = 0; i < lumps.length; ++ i) {
        if (lumps[i].rsfID === "header:") found = true;
        }
     
      jqUnit.assertTrue("Template+selector parse", found);
      
      jqUnit.assertFalse("Template render", rendered.indexOf("5") === -1); 
    
      });
    
    renderTests.test("ID-based render test", function() {
      var contentTree = {
        "data-row:" : [
            {"species": "Man", "score": 7.44 },
            {"species": "Dolphin", "score": 5.31 },
            {"species": "Chimpanzee", "score": 2.49 },
            {"species": "Rhesus Monkey", "score": 2.09 },
            {"species": "Elephant", "score": 1.87 },
            {"species": "Whale", "score": 1.76 },
            {"species": "Dog", "score": 1.17 },
            {"species": "CATT", "score": 1.00 },
            {"species": "Horse", "score": 0.86 },
            {"species": "Sheep", "score": 0.81 },
            {"species": "Mouse", "score": 0.50 },
            {"species": "Rat", "score": 0.40 },
            {"species": "Rabbit", "score": 0.40 }             ]
        };

      fluid.selfRender($(".paged-content"), contentTree);
      var rows = $(".paged-content tr").length;
      jqUnit.assertEquals("Rendered row count", 14, rows);
      var cells = $(".paged-content td").length;
      jqUnit.assertEquals("Rendered cell count", 26, cells);
      
    });
    };
  })(jQuery); 