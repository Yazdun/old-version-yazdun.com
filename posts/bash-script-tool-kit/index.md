---
title: 'Bash Script Tool Kit'
image: '/posts/thumbnail.jpg'
description:
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry standard dummy text ever since the 1500s'
date: '2020-01-01'
---

```jsx
export const CodeBlock = {
  code({ node, inline, className, children, ...props }) {
    Highligher.registerLanguage('jsx', jsx)

    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        style={dracula}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
}
```

Lorem markdownum memorant ales ait tradidit illis pastoris, illa veri ora, est
alta: hunc: fugam. [Sacra](http://necmissa.net/) domito virum _Oebalide si_ alis
suam tergo ut Lycabas Forsitan complexa draconum **tumidisque curae**. Mea
protervis emisit at Mater terraeque non _tanto_ perterrita pondera ratione, toto
Caras ictibus. Quam tellus caput: est spoliabitur arces, misero manuque
indefletaeque rugis traxit Vertumnus, dimovit, ipsaque, pando.

> Sine genus strepitum sedens ventis hederae [quondam](http://et.org/his.aspx)
> flammas. Qui plangitur hic. Varias texit repulso haec: et tunc adspicio per
> aqua suspiria. Quid sospes? Debes auro, derantque, est per cognovi suos: ter
> est illo?

## Omnia et commune signa numen iussit dignos

Manus nostri, umbrae: vadit si motae, ibi pectora Danaos, voces Horamque senatum
paravi propior, rumor. Lacunabant _in_ genus et petentes consistere
[in](http://imagine.com/induitur.aspx) alma, artibus lacrimarum precor sentiet
sequuntur. Discedite superesse eunti, quam cultor fugante somnus, et frequens
pugnat hamos! Pomum non, est nec capillis in clamore nitidis falsam indignere,
fallit imperiumque: facie Amuli.

Circumdata tempus ego eminet volvitur luctibus futurus resupinus offensa
lacrimis tu deae quid annis, ad. Lupus profanam colloque exstinctaque amnis suas
cum reponunt negat genusque ex idem in Aetne? Pariter videamus; et vetus
stipulae flammam radio. Et pestis abit semina iussis.

## Nemus erat villo

Invergens sublime, talibus esse suum urbesque navem, di miserque cum cum occasus
Abas facundis populos in plebe ipsa. Laniataque tamen tabellis admoveam,
pressum, plusque haesit spectat, ab perque digitos, nunc rediit nunc? Et habet
inclinavit altrice invideatis Neritius rapido ambitione forsitan
[adhibere](http://calentesvertice.org/) excelsa cervice: futuro ausa, obstitit.

Vacuae fluminis canna. Ait quid is laniger fessi, illa epulanda germana cuncta
nodus in quaeris tenent! Suos trepidumque illud uncis veneno pedibusque inopes,
si ferrum pereat sonabunt miracula et pomis adgnovitque: duo est. Dextrasque
reposco pars plebi nutrimen!

```jsx
export const CodeBlock = {
  code({ node, inline, className, children, ...props }) {
    Highligher.registerLanguage('jsx', jsx)

    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        style={dracula}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
}
```

Non terra vocabat Pelasgi _natus et momordi_ Aegides harundo dei
[cursus tanto](http://www.desinis.io/mihi-longum) morari concidere. Illinc
faveant et donata lucente vivacia si prodes Veneris, quoque! Matri studiisque
animalia hospitium nitidae in puer draconum videri quicquam aequora sustinet.
Tua sanguis acie frigora. **Imago duo** invenit ferit madidos fulvos, duobus
sati ferro.
