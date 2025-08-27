---
layout: single
author_profile: true
---

For the past 4 years, I worked at a [crypto hedge fund](https://www.bloomberg.com/news/articles/2023-03-11/brevan-howard-digital-takes-over-dragonfly-capital-crypto-fund-bh-digital?sref=ke6n0lkN) leading quant research and engineering through the launch and growth of the fund. I learned about the process of doing research and thoroughly testing ideas, including designing repeatable research processes and systems.

I will be leaving the fund in fall 2025 and looking for full time or contract work in AI research with particular interest in:
- What are the fundamental mechanisms of LLM thinking and learning? What can this tell us about improving and understanding model capability?
- How do models reason and how can we make reasoning more effective, particularly for math and coding?

Previously, I studied math at Princeton where I was very interested in [paradoxes](#the-banach-tarski-paradox-and-weakenings-of-the-axiom-of-choice), [category theory](#adjoint-equivalence-of-heyting-boolean-and-closure-algebras) and why mathematics works.

I am a dual US / Canadian citizen who grew up in Boston. I've previously lived in :us: :singapore: :united_arab_emirates: and spent significant time in :hong_kong: :gb:. I plan to move to San Francisco in fall 2025/early 2026.


<br>

## Projects

### Subliminal Learning as a Byproduct of Superposition
*Blogpost*<br>**August 2025**

*Non-Technical Description*: LLMs are often trained by a teacher model creating data to teach another model. Subliminal learning is the phenomenon of unintended traits being passed through that data. In this post, I use a variety of methods from mechanistic interpretability to explore the idea that subliminal learning occurs due to how LLMs represent different concepts internally, causing coincidental relationships between certain concepts.


*Description*: [Subliminal learning](https://arxiv.org/abs/2507.14805) is the phenomenon of a student model learning unintended attributes of a teacher model through distillation when there is shared initialization. In this post, I explore the hypothesis that subliminal learning is a byproduct of superposition, the dense juxtaposition of learned features in activation space. Through toy models, SAE decomposition of features, training a linear probe and decomposing a steering vector, I show evidence that subliminal learning is a consequence of superposition.


*Codebase*: [GitHub](https://github.com/ariahw/subliminal-learning)


[**See the blogpost here**]({% post_url 2025-08-29-subliminal-learning %})

<br>

###  The Banach-Tarski Paradox and Weakenings of the Axiom of Choice
*Senior Thesis, Department of Mathematics, Princeton University<br>Advised by Hans Halvorson*<br>**June 2020**

*Non-Technical Description*: The Banach-Tarski Paradox is a mathematical paradox showing that a ball can be divided into infinite pieces, re-arranged and re-assembled into two of the original ball. This paper shows that the paradox is implied by a few fundamental theorems of logic and set theory, raising philosophical questions about the foundations of mathematics. 

*Technical Description*: This paper proves all possible relationships between the Boolean Prime Ideal Theorem, Weak Ultrafilter Theorem, Hahn-Banach theorem and Banach-Tarski Paradox using techniques of set theory and forcing. This includes a novel proof showing the Weak Ultrafilter Theorem implies the Banach Tarski Paradox (Theorem 2.7), a relationship that had previously been unknown in the literature.

[Full Paper Link](https://drive.google.com/file/d/11cgxhdDeUn8FZ_uw1ZcKtvj7erpFAE1y/view?usp=sharing)

<br>

### Adjoint Equivalence of Heyting, Boolean and Closure Algebras
*Junior Paper, Department of Mathematics, Princeton University<br>Advised by Hans Halvorson*<br>**May 2019**

*Description*: This paper explores three logical systems:
- Classical logic, defined as a Boolean algebra: Generally accepted classical logic with modus ponens, modus tollens, double negation and deduction theorems
- Intuitionistic logic, defined as a Heyting algebra: Classical logic without double negation; this prevents proof by contraditction meaning that intuitionistic logic is the foundation of constructivist mathematics
- Modal logic, defined as a closure algebra: Adds a "possibly true" operator to logic

Each logic is defined as an algebra, then subsequently defined as a category. Using the categorical definitions, we show "adjoint equivalence" - a structure-preserving isomorphism betweeen categories - between all three categories. Prior work had shown some of these relationships, this paper expands upon this by revising the category structure to be able to prove the result. This result raises philsophical implications about the relationship between the three forms of logic.


[Full Paper Link](https://drive.google.com/file/d/1HaFDRB9fV8ydBoIaVMNUXhWwSKxrCj9a/view?usp=drive_link)

<br>

### Reducing the RNA binding protein TIA1 protects against tau-mediated neurodegeneration in vivo
*Boston University School of Medicine, Wolozin Lab<br>***Summer 2016**

*Non-Technical Description*: Previous studies have shown that "stress granules" in neurons in the brain is associated with Alzheimers in humans and in mice. In this paper, the author showed that in a living mouse model for neurodegeneration, reducing the RNA binding protein TIA1 protected against neurodegeneration by preventing stress granules from forming. The author also exposed the underlying mechanism that prevents stress granule formation. 

*Abstract*: Emerging studies suggest a role for tau in regulating the biology of RNA binding proteins (RBPs). We now show that reducing the RBP T-cell intracellular antigen 1 (TIA1) in vivo protects against neurodegeneration and prolongs survival in transgenic P301S Tau mice. Biochemical fractionation shows co-enrichment and co-localization of tau oligomers and RBPs in transgenic P301S Tau mice. Reducing TIA1 decreased the number and size of granules co-localizing with stress granule markers. Decreasing TIA1 also inhibited the accumulation of tau oligomers at the expense of increasing neurofibrillary tangles. Despite the increase in neurofibrillary tangles, TIA1 reduction increased neuronal survival and rescued behavioral deficits and lifespan. These data provide in vivo evidence that TIA1 plays a key role in mediating toxicity and further suggest that RBPs direct the pathway of tau aggregation and the resulting neurodegeneration. We propose a model in which dysfunction of the translational stress response leads to tau-mediated pathology. 

*My Contribution*: I spent a summer doing wet lab work and writing R for a lab at the BU School of Medicine. My visualizations in R were helpful for understanding some genomic sequencing data they had not been able to use thus far. This was my first programming project. 

**Published in [Nature Neuroscience](https://www.nature.com/articles/s41593-017-0022-z) in October 2017**

<br>
<br>