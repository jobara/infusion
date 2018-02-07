// Hyphenation patterns for Modern Monotonic
// Based on http://mirrors.ctan.org/language/hyph-utf8/tex/generic/hyph-utf8/patterns/tex/hyph-el-monoton.tex
// Source www.ctan.org

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.hyphenationPatternsElMonoton = factory();
  }
}(this, function () {

  // Hyphenation patterns
  var patterns=`
%%%% vowels
%-- Vowel patterns (pre-combined)
α1 ε1 η1 ι1 ο1 υ1 ω1 ϊ1 ϋ1 ά1 έ1 ή1 ί1 ό1 ύ1 ώ1 ΐ1 ΰ1
%%%% double vowels (formerly called "diphthogs") and exceptions
α2ι
α2ί α2ί
ά2ι ά2ι ά2ϊ ά2ϊ % 'a3i --- not to be separated: ne-r'aida
α2υ
α2ύ α2ύ
ά3υ ά3υ
ε2ι
ε2ί ε2ί
έ2ι έ2ι έ2ϊ έ2ϊ % 'e3i --- not to be separated: to rw-m'ei-ko (one way to pronounce it)
ε2υ
ε2ύ ε2ύ
έ3υ έ3υ
η2υ
η2ύ η2ύ
ή3υ ή3υ
ο2ι
ο2ί ο2ί
ό2ι ό2ι ό2ϊ ό2ϊ % 'o3i --- not to be separated: to ko-r'oido
ο2υ
ο2ύ ο2ύ
ό3υ ό3υ
υ2ι
υ2ί υ2ί
ύ3ι ύ3ι
%%%% diphthogs: two vowels pronounced together in *one* syllable
%%%% (in some cases, the rules below will not allow the split up
%%%% of syllables in words like: ka-ko-poi'oc, etc., but, better
%%%% this than gross mistakes like: qw-ri-'o)
α2η
ά3η. ά3η.
α2ϊ
ά3ι. ά3ι.   % ts'a-i
α2ϋ   % ka"u-m'oc
ε2ϊ   % ze"i-mpekikoc
ε2ϋ   % Ke"u-l'anh
ο2ει   % ap'oei-de
ο2η   % b'oh-ja!
ό3η. ό3η.   % ql'o-h al'o-h
ο2ϊ
ό3ι. ό3ι.   % s'o-i
%%%%
ι2α
ι2ά ι2ά
ι2ε
ι2έ ι2έ
ι2ο
ι2ό ι2ό
ο3ϊ3ό ο3ϊ3ό   % pro-"i-'on
ι2ω
ι2ώ ι2ώ
.ι3
.ί3 .ί3
η2α
η2ά η2ά
η2ε
η2έ η2έ
η2ο
η2ό η2ό
η2ω
η2ώ η2ώ
.η3
.ή3 .ή3
υ2α
υ2ά υ2ά
υ2ο
υ2ό υ2ό
υ2ω
υ2ώ υ2ώ
.υ3
.ύ3 .ύ3
%%%% consonants at the end of words (including double consnants:
%%%% gk, mp, nt, tz, ts).
4β.
4γ.
4γκ.
4δ.
4ζ.
4θ.
4κ.
4λ.
4μ.
4μπ.
4ν.
4ντ.
4ξ.
4π.
4ρ.
4σ. 4ϲ.
4ς.
4τ.
4τζ.
4τσ. 4τϲ.
4τς.
4φ.
4χ.
4ψ.
%%%% right apostrophe and consonants with right apostrophe
4' 4ʼ 4᾿
4β' 4βʼ 4β᾿
4γ' 4γʼ 4γ᾿
4δ' 4δʼ 4δ᾿
4ζ' 4ζʼ 4ζ᾿
4θ' 4θʼ 4θ᾿
4κ' 4κʼ 4κ᾿
4λ' 4λʼ 4λ᾿
4μ' 4μʼ 4μ᾿
4μπ' 4μπʼ 4μπ᾿
4ν' 4νʼ 4ν᾿
4ντ' 4ντ’ 4ντ᾿
4ξ' 4ξʼ 4ξ᾿
4π' 4πʼ 4π᾿
4ρ' 4ρʼ 4ρ᾿
4σ' 4σʼ 4σ᾿ 4ϲ' 4ϲʼ 4ϲ᾿
4τ' 4τʼ 4τ᾿
4τζ' 4τζʼ 4τζ᾿
4τσ' 4τσʼ 4τσ᾽ 4τϲ' 4τϲʼ 4τϲ᾿
4φ' 4φʼ 4φ᾿
4χ' 4χʼ 4χ᾿
4ψ' 4ψʼ 4ψ᾿
%%%% consonants at the beggining of words
.β4
.γ4
.δ4
.ζ4
.θ4
.κ4
.λ4
.μ4
.ν4
.ξ4
.π4
.ρ4
.σ4 .ϲ4
.τ4
.φ4
.χ4
.ψ4
%%%% separable double consonants
4β1β
4γ1γ
4δ1δ
4ζ1ζ
4θ1θ
4κ1κ
4λ1λ
4μ1μ
4ν1ν
4π1π
4ρ1ρ
4σ1σ 4ϲ1ϲ
4τ1τ
4φ1φ
4χ1χ
4ψ1ψ
%%%% other breakable consonant combinations
4β1ζ
4β1θ
4β1κ
4β1μ
4β1ν
4β1ξ
4β1π
4β1σ 4β1ϲ
4β1τ
4β1φ
4β1χ
4β1ψ
4γ1β
4γ1ζ
4γ1θ
4γ1μ
4ρ5γ2μ   % >'er-gma = 'ergo (arq.)
4γ1ξ
4γ1π
4γ1σ 4γ1ϲ
4γ1τ
4γ1φ
4γ1χ
4γ1ψ
4δ1β
4δ1γ
4δ1ζ
4δ1θ
4δ1κ
4δ1λ
% "dm" --- not separable: dm~hsic = exhm'erwma (arq.)
% "dn" --- not separable: dnofer'oc = zofer'oc, skotein'oc (arq.)
%                         Dne'iperoc = potam'oc thc Rws'iac
4δ1ξ
4δ1π
4δ1σ 4δ1ϲ
4δ1τ
4δ1φ
4δ1χ
4δ1ψ
4ζ1β   % "zb" and "zg" appear in the beggining of Greek words (e.g., in
4ζ1γ   % Andriotes' Lexicon), but they're usually written as "sb" and "sg".
4ζ1δ
4ζ1θ
4ζ1κ
4ζ1λ
4ζ1μ
τζ2μ   % m'ana-tzment (m'a-na-tzment)
4ζ1ν
4ζ1ξ
4ζ1π
4ζ1ρ
4ζ1σ 4ζ1ϲ
4ζ1τ
4ζ1φ
4ζ1χ
4ζ1ψ
4θ1β
4θ1γ
4θ1δ
4θ1ζ
4θ1κ
4θ1μ
4ρ5θ2μ   % por-jm'oc
σθ2μ ϲθ2μ   % i-sjm'oc
4θ1ξ
4θ1π
4θ1σ 4θ1ϲ
4θ1τ
4θ1φ
4θ1χ
4θ1ψ
4κ1β   % "kb" may not be not separable: kb'anto kbantomhqanik'h
4κ1γ
4κ1δ
4κ1ζ
4κ1θ
4κ1μ
4λ5κ2μ   % Al-km'hnh
4ρ5κ2μ   % dar-km'a = draqm'h (arq.)
4κ1ξ
4κ1π
4κ1σ 4κ1ϲ
4κ1φ
4ν5κ2φ   % Fran-kfo'urth
4κ1χ
4κ1ψ
4λ1β
4λ1γ
4λ1δ
4λ1ζ
4λ1θ
4λ1κ
4λ1μ
4λ1ν
4λ1ξ
4λ1π
4λ1ρ
4λ1σ 4λ1ϲ
4λ1τ
4λ1φ
4λ1χ
4λ1ψ
4μ1β
4μ1γ
4μ1δ
4μ1ζ
4μ1θ
4μ1κ
4μ1λ
4μ1ξ
4μ1ρ
4μ1σ 4μ1ϲ
4μ1τ
4μ1φ
4μ1χ
4μ1ψ
4ν1β
4ν1γ
4ν1δ
4ν1ζ
4ν1θ
4ν1κ
4ν1λ
4ν1μ
4ν1ξ
4ν1π
4ν1ρ
4ν1σ 4ν1ϲ
4ν1φ
4ν1χ
4ν1ψ
4ξ1β
4ξ1γ
4ξ1δ
4ξ1ζ
4ξ1θ
4ξ1κ
4ξ1λ
4ξ1μ
4ξ1ν
4ξ1π
4ξ1ρ
4ξ1σ 4ξ1ϲ
4ξ1τ
4γ5ξ2τ   % el'eg-xte
4ρ5ξ2τ   % up'ar-xte
4ξ1φ
4ξ1χ
4ξ1ψ
4π1β
4π1γ
4π1δ
4π1ζ
4π1θ
4π1κ
4π1μ
4π1ξ
4π1σ 4π1ϲ
4π1φ
4π1χ
4π1ψ
4ρ1β
4ρ1γ
4ρ1δ
4ρ1ζ
4ρ1θ
4ρ1κ
4ρ1λ
4ρ1μ
4ρ1ν
4ρ1ξ
4ρ1π
4ρ1σ 4ρ1ϲ
4ρ1τ
4ρ1φ
4ρ1χ
4ρ1ψ
4σ1δ 4ϲ1δ   % "sd" may not be separable: sde'ugla = ze'ugla (arq.)
4σ1ζ 4ϲ1ζ
4σ1ν 4ϲ1ν   % "sn" may not be separable: sn'iqi (= sb'erkoc) snompism'oc
4σ1ξ 4ϲ1ξ
4σ1ρ 4ϲ1ρ
4σ1ψ 4ϲ1ψ
4τ1β
4τ1γ
4τ1δ
4τ1θ
4τ1κ
% "tl" --- not separable: tlhmws'unh = miz'eria (arq.)
4τ1ν
4τ1ξ
4τ1π
4τ1φ
στ2φ ϲτ2φ   % fa-stfount'adiko Be-stfal'ia (German'ia)
4τ1χ
4τ1ψ
4φ1β
4φ1γ
4φ1δ
4φ1ζ
4φ1κ   % "fk" may not be separable: fki'anw, fkias'idi
4φ1μ
4φ1ν
4ρ5φ2ν   % or-fn'oc = skotein'oc (arq.)
4φ1ξ
4φ1π
4φ1σ 4φ1ϲ
4φ1χ
4φ1ψ
4χ1β
4χ1γ
4χ1δ
4χ1ζ
4χ1κ
4χ1μ
4ρ5χ2μ   % dar-qm'a = draqm'h (arq.)
4χ1ξ
4χ1π
4χ1σ 4χ1ϲ
4χ1φ
4χ1ψ
4ψ1β
4ψ1γ
4ψ1δ
4ψ1ζ
4ψ1θ
4ψ1κ
4ψ1λ
4ψ1μ
4ψ1ν
4ψ1ξ
4ψ1π
4ψ1ρ
4ψ1σ 4ψ1ϲ
4ψ1τ
4μ5ψ2τ   % l'am-yte
4ψ1φ
4ψ1χ
%%%% some separable nasal consonant combinations
4γ5κ2φ   % Frag-kfo'urth
4γ1κτ   % eleg-kt'hc
4μ1πτ   % 'amem-ptoc
4ν1τζ   % neran-tzi'a
4ν1τσ 4ν1τϲ   % biolon-ts'elo
%%%%
%%%% some \`weird' terminations in words of Greek and non-Greek origin
%%%%
4βρ.   % or-nt'ebr
4γλ.   % (od'oc Kar'olou) Ogl (B'oloc)
4κλ.   % pi-n'akl
4κτ.   % takt
4γκς. 4γκϲ.   % mpagkc (mp'annu)
4γκσ.
6κς. 6κϲ.   % tankc
4κσ.
4λς. 4λϲ.   % balc
4λσ.
4μπλ.   % ntampl (pod'osfairo)
4μπν.   % Impn (Sa"'int, arabik'o 'onoma)
4μπρ.   % romp-nte-s'ampr
4μς. 4μϲ.   % Tz'eimc
4μσ.
4νς. 4νϲ.   % 'el-minc ('el-min-joc) tranc
4νσ.
4ρς. 4ρϲ.   % (empr'oc) marc
4ρσ.
4σκ. 4ϲκ.   % Noboros'isk (p'olh thc Rws'iac)
4στ. 4ϲτ.   % karst trast
4τλ.   % Si'atl (p'olh twn HPA)
4τρ.   % maitr
4ντς. 4ντϲ.   % (frou'it) pantc Frantc
4ντσ.
4φτ.   % kriskr'aft
4χτ.   % B'ermaqt (Germanik'oc Strat'oc)
%%%%
%%%% some \`weird' double-consonant combinations that may occur in
%%%% words of non-greek origin like "romp-nte-s'ampr" (= robe de
%%%% chambre)
%%%%
4γκ1μπ
4γκ1ντ
4γκ1τζ
4γκ1τσ 4γκ1τϲ
4μπ1ντ
4μπ1τζ
4μπ1τσ 4μπ1τϲ
4ντ1μπ
4τσ1γκ 4τϲ1γκ
4τσ1μπ 4τϲ1μπ
4τσ1ντ 4τϲ1ντ
`;

  // Hyphenation exceptions
  var exceptions=`
`;

  return {
    patterns: patterns,
    exceptions: exceptions
  };
}));
