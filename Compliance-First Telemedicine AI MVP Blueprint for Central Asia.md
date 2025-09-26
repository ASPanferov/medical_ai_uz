# Compliance-First Telemedicine AI MVP Blueprint for Central Asia

## Executive Summary

This report provides a comprehensive blueprint for launching a telemedicine AI Minimum Viable Product (MVP) in Central Asia, with a strategic focus on Kazakhstan and Uzbekistan. The analysis reveals a market with high digital readiness but a complex and unforgiving regulatory landscape. The primary strategic imperative is **compliance-first**, as non-adherence to strict data localization laws is an immediate showstopper. [executive_summary[0]][1]

The optimal MVP can be launched in **3 months** with a budget of **$170,000 to $250,000**. [executive_summary[0]][1] It must be architected on a fully **self-hostable, open-source stack** deployed on sovereign cloud infrastructure within Kazakhstan to comply with Law No. 94-V. [recommended_technology_stack.core_architectural_principle[0]][2] [recommended_technology_stack.core_architectural_principle[2]][3] The core feature set must be limited to multi-modal teleconsultations (video, audio, chat) and basic e-prescribing, with a mandatory **human-in-the-loop (HITL) triage workflow** where every patient case is reviewed by a licensed clinician. [executive_summary[0]][1] This HITL model is not just a safety feature but a legal necessity, aligning with Kazakhstan's draft AI law that bans fully autonomous clinical AI. [risk_register_and_mitigation_plan.clinical_safety_risks[0]][4]

Higher-risk AI features like automated symptom checkers must be deferred to a post-MVP phase to avoid classifying the software as a high-risk medical device, which would trigger a lengthy 6-12 month EAEU registration process. The technology strategy is to **"buy" the video component** by licensing a commercial SDK and **"build" the core platform** to ensure full control over data and compliance. [executive_summary[0]][1]

Monetization must pivot away from direct-to-consumer models, as a standard $20 consultation represents over 10% of the median monthly income in Kazakhstan. The most viable path to scale is through **B2B2C partnerships** with employers, insurers, and telecom operators, replicating successful local models like Beeline's "hambi" app bundle in Uzbekistan. [recommended_monetization_model.b2b_and_b2b2c_models[0]][5]

Market entry should be sequenced, starting with **Kazakhstan**, where a fragmented but accessible private market and live FHIR APIs allow for a faster pilot launch (6-9 months) with partners like the Mediker clinic network and the Social Health Insurance Fund (SHIF). [executive_summary[0]][1] Entry into **Uzbekistan** should follow, as it requires a mandatory and potentially bureaucratic partnership with the state-affiliated entity IT-Med LLC. [executive_summary[0]][1]

## 1. Regulatory Gateposts Define the Battlefield

The success of a telemedicine MVP in Central Asia is dictated not by technology, but by navigating a gauntlet of stringent, and at times ambiguous, regulations. Compliance sequencing is the true critical path, not coding.

### 1.1 Kazakhstan Law 94-V & Draft AI Act — 5 compliance checkpoints to pass or pause

Kazakhstan's legal framework is mature and strictly enforced, creating clear but high barriers to entry.

1. **Absolute Data Localization**: The Law 'On Personal Data and their Protection' (No. 94-V) is unequivocal: all personal data must be stored in databases physically located within the Republic of Kazakhstan. [kazakhstan_regulatory_framework.health_data_and_telemedicine_laws[0]][6] [kazakhstan_regulatory_framework.health_data_and_telemedicine_laws[1]][2] This makes using international SaaS platforms a non-starter.
2. **Mandatory Human-in-the-Loop for AI**: The draft 'Law on Artificial Intelligence' (expected H1 2025) classifies any AI impacting human life or health as 'High-Risk' and proposes a ban on fully autonomous decision-making. [kazakhstan_regulatory_framework.ai_specific_legislation[0]][7] This legally mandates a human-in-the-loop architecture for any clinical AI.
3. **Explicit, Informed Consent**: The Health Code requires explicit, informed consent for the collection and processing of health data, which can be given in written or electronic form. [kazakhstan_regulatory_framework.health_data_and_telemedicine_laws[2]][8] For telemedicine, patients must provide written voluntary confirmation. [kazakhstan_regulatory_framework.health_data_and_telemedicine_laws[2]][8]
4. **Official Record-Keeping**: All opinions from telemedicine services are official documents and must be entered into the patient's national Electronic Health Passport using the doctor's Electronic Digital Signature (EDS). [kazakhstan_regulatory_framework.health_data_and_telemedicine_laws[2]][8] [risk_register_and_mitigation_plan.regulatory_and_geopolitical_risks[1]][1]
5. **Unified Security Standards**: All ICT systems must comply with Decree No. 832, which sets unified requirements for information security. [kazakhstan_regulatory_framework.health_data_and_telemedicine_laws[3]][9]

### 1.2 Uzbekistan’s Data-Localization Mandate and Telemedicine Void — Turning uncertainty into first-mover advantage

Uzbekistan's framework is a mix of strict data laws and underdeveloped telemedicine policies, creating both risk and opportunity.

* **Strict Data Localization**: Like Kazakhstan, Uzbekistan's Law 'On Personal Data' (ZRU-547) mandates that personal data of its citizens be stored on servers physically located within the country. [recommended_technology_stack.core_architectural_principle[1]][10] All databases must be registered with the state's Personalization Agency. [recommended_technology_stack.core_architectural_principle[1]][10]
* **Telemedicine Regulatory Gap**: There is currently no specific law or guideline for telemedicine practice. [uzbekistan_regulatory_framework.telemedicine_practice_rules[0]][1] [uzbekistan_regulatory_framework.telemedicine_practice_rules[1]][11] This creates ambiguity around clinician licensing, e-prescriptions, and liability. Operations must proceed under general healthcare laws while closely monitoring the development of a forthcoming telemedicine law.
* **Proactive AI Governance**: A new law regulating AI was approved in August 2025, mandating human oversight for any decision affecting human rights and freedoms. [uzbekistan_regulatory_framework.ai_governance_and_risk_management[0]][12] This aligns with the government's strategy to implement over 60 priority AI projects by 2026, including in healthcare. [uzbekistan_regulatory_framework.ai_governance_and_risk_management[0]][12]

### 1.3 SaMD Registration under EAEU Rules — 6-12 month timeline, cost drivers and dossier checklist

Any software intended for diagnosis or treatment is considered a Software as a Medical Device (SaMD) and falls under the stringent Eurasian Economic Union (EAEU) registration system, which Kazakhstan adheres to.

* **Classification**: SaMD is classified as an 'active medical device' and categorized into four risk classes (1, 2a, 2b, 3). An AI symptom checker would likely be Class 2a or higher.
* **Process**: Registration is a formal, multi-stage process with the Ministry of Health and the National Center for Expertise of Medicines and Medical Devices (NCEEMD) that can take **6-12 months**. [partnership_strategy.kazakhstan_partnership_plan[6]][13]
* **Technical Standard**: The GOST IEC 62304-2022 standard applies, requiring a rigorous software lifecycle process with a strong focus on quality and risk management. 

This lengthy and complex process is why the MVP scope must deliberately avoid features that would classify it as a medical device.

## 2. Digital & Clinical Market Readiness

Both markets show high digital readiness, but their economic and healthcare system differences demand distinct strategies. High internet penetration is a green light, but low disposable income is a major yellow flag for B2C models.

### 2.1 Connectivity & Smartphone Penetration — 92.9% online in KZ, 37 Mbps mobile in UZ enables video care

Both countries possess the digital backbone to support telemedicine, though last-mile connectivity remains a consideration.

| Metric | Kazakhstan (Early 2025) | Uzbekistan (Early 2025) |
| :--- | :--- | :--- |
| **Population** | 20.7M (58.5% urban) | 36.7M (50.7% urban) |
| **Internet Penetration** | 92.9% (19.2M users) | 89.0% (32.7M users) |
| **Mobile Connectivity** | 128% of population (26.6M) | 92.2% of population (33.9M) |
| **Broadband Capable (3G+)** | 95.7% of connections | 94.0% of connections |
| **Median Mobile Speed** | 53.69 Mbps | 37.82 Mbps |
| **Median Fixed Speed** | 66.38 Mbps | 79.06 Mbps |
| **Key Infrastructure** | Aggressive 5G rollout; licensing satellite internet (Starlink) for remote areas. | Smartphone penetration projected at 77% by 2025. |

**Key Takeaway**: The infrastructure supports video consultations, but the significant "usage gap" in Uzbekistan (47%) and the need to cover remote areas in Kazakhstan make asynchronous chat and audio-only calls essential, non-negotiable features for an inclusive MVP. [central_asia_market_readiness.digital_infrastructure_and_connectivity[0]][14]

### 2.2 Consumer Price Elasticity — $5–$7 sweet spot proven by Med24 & Yandex.Health

Local income levels make direct-to-consumer pricing a major challenge, reinforcing the need for partnership-based models.

* **Kazakhstan**: The average monthly income in 2024 was ~$221, with a median of only **~$186**. [recommended_monetization_model.unit_economics_and_financials[0]][15] A single specialist consultation at a private clinic like BMC UDP can cost **$28 to $60**, representing a significant portion of monthly income. 
* **Uzbekistan**: The average monthly salary was higher at **~$470** in H1 2025. [central_asia_market_readiness.health_system_and_economics[0]][14] Local platforms like Med24.uz price specialist consultations much lower, around **$4.70**. 
* **International Benchmark**: Yandex.Health, a relevant competitor for the Russian-speaking market, offered quick consults for **~$5.50** and standard consults for **~$17**. 

**Key Takeaway**: The data points to a B2C price ceiling of **$5-$20** for a standard consultation. The high cost relative to median income makes B2B2C models (employer, insurer, or telco-paid) the most viable strategy for achieving mass adoption.

### 2.3 Workforce Gap & Disease Burden — GP shortage vs. NCD prevalence frames service demand

Both countries have healthcare system pressures that telemedicine can directly address.

* **Kazakhstan**: The country has a mandatory social health insurance system (OSMS) and operates a national telemedicine network, primarily to serve rural areas and manage chronic diseases. [central_asia_market_readiness.health_system_and_economics[0]][14]
* **Uzbekistan**: The government is driving a rapid digitalization of the health sector under its 'Digital Uzbekistan-2030' strategy and is open to large-scale public-private partnerships. [central_asia_market_readiness.health_system_and_economics[0]][14]
* **Language & Trust**: A successful MVP must be bilingual (Russian/Kazakh, Russian/Uzbek). The emergence of local-language AI models like 'BeeBERT' for Kazakh shows strong demand for localized experiences. [central_asia_market_readiness.consumer_and_market_factors[0]][14]

**Key Takeaway**: While specific data on disease prevalence and healthcare utilization is lacking, the strategic focus of both governments on digital health and rural access confirms a strong underlying demand for telemedicine services.

## 3. Competitive & Case-Study Intelligence

The global and regional telemedicine landscape offers clear lessons: platforms that prioritize regulatory compliance and clinical safety outperform those focused on growth at all costs. White-box, locally-hosted AI is superior to black-box, cloud-only rivals.

| Platform | Funding ($M) | Data-Loc Fit | AI Cert | Notable Outcome | Relevance Score |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Ada Health** | $201–$242 | EU-only (✗) | CE IIa | 35M assessments | Medium |
| **Babylon Health** | $657 | - | Class I | Bankruptcy 2023 | Cautionary |
| **K Health** | $439 | TBD (cloud) | HITL | 9M users | High |
| **Buoy Health** | $67 | US-only (✗) | HITRUST | 43% accuracy | Low |
| **Infermedica** | $44 | Custom | CE IIb | 94% accuracy | High |
| **Yandex.Health** | N/A | Russia-only (✗) | N/A | Sold to Genotek | Cautionary |
| **SberZdorovye** | N/A | Russia-only (✗) | N/A | Sanctioned | Cautionary |
| **DOC+** | $20.5 | Russia-only (✗) | N/A | Defunct (Merged) | Irrelevant |

**Key Takeaway**: Platforms with strict, EU-only or Russia-only data hosting (Ada, Yandex, Sber) are non-starters for Central Asia. [comparative_platform_analysis.0.central_asia_fit_assessment[0]][16] [comparative_platform_analysis.6.central_asia_fit_assessment[0]][17] [comparative_platform_analysis.7.central_asia_fit_assessment[0]][18] Babylon's $4.2B collapse is a stark warning against unsubstantiated AI claims and unsustainable cash burn. [comparative_platform_analysis.1.business_model_and_funding[0]][19] Infermedica's Class IIb certification and K Health's human-in-the-loop model are the gold standards to emulate. [comparative_platform_analysis.5.regulatory_and_compliance[0]][20] [comparative_platform_analysis.2.regulatory_and_compliance[0]][21]

### 3.1 Success Playbooks: PneumoNet, Viz.ai — public-private funding + workflow embedding

Local and international case studies provide a clear playbook for successful implementation.

* **PneumoNet (Kazakhstan)**: This AI-powered teleradiology platform for lung disease was developed by a local research institute and a private company, accelerated by a **$340,000** World Bank grant. [relevant_case_studies.0.regulatory_path_and_compliance[0]][22] It scaled to **130** medical organizations, processing **30,000** scans per month by embedding itself directly into the radiologist's workflow as a decision-support tool, halving reading times. [relevant_case_studies.0.deployment_scale_and_impact[0]][22] **Lesson**: Public-private partnerships that solve a specific clinical workflow problem can achieve rapid scale and adoption. [relevant_case_studies.0.key_lessons_for_central_asia[0]][22]
* **Viz.ai ContaCT (USA)**: An AI tool that analyzes stroke CT scans and automatically notifies the entire on-call stroke team via a mobile app. [relevant_case_studies.2.problem_and_solution[0]][23] It received FDA De Novo clearance by focusing on triage and notification, not autonomous diagnosis. [relevant_case_studies.2.regulatory_path_and_compliance[0]][23] **Lesson**: AI that optimizes communication and accelerates time-to-treatment in emergencies provides immense value and has a clear regulatory path. This model is highly transferable to Central Asia, where specialists are often centralized. [relevant_case_studies.2.key_lessons_for_central_asia[0]][23]

### 3.2 Failure Red Flags: Babylon scale-before-model, IDx-DR specificity gap

The failures are as instructive as the successes.

* **Babylon Health**: The company's "growth-at-all-costs" strategy, fueled by **$657M** in funding, led to a **$4.2B** valuation followed by bankruptcy. [comparative_platform_analysis.1.business_model_and_funding[0]][19] Its downfall was marked by unsubstantiated claims about its AI's diagnostic accuracy and a data breach that eroded trust. **Lesson**: Trust and clinical safety are paramount; overhyping AI is a fatal error.
* **IDx-DR / LumineticsCore**: The first FDA-authorized autonomous AI diagnostic system, it showed high sensitivity (87.2%) and specificity (90.7%) in pivotal trials. [relevant_case_studies.1.deployment_scale_and_impact[0]][24] However, real-world studies revealed a high false-positive rate, with one showing a positive predictive value of only **19%** (four out of five 'refer' results were false). [relevant_case_studies.1.deployment_scale_and_impact[0]][24] **Lesson**: Real-world performance can differ dramatically from controlled trials. A high false-positive rate could overwhelm the limited specialist referral systems in Central Asia, making local validation studies essential before any large-scale rollout. [relevant_case_studies.1.key_lessons_for_central_asia[0]][25]

## 4. MVP Scope That Ships in 90 Days

To launch within 3 months, the MVP scope must be ruthlessly prioritized around core, low-risk functionality that delivers immediate value while ensuring clinical safety and regulatory compliance. Less AI, more compliance equals faster market entry.

### 4.1 Must-Have Features — video/audio/chat, HITL triage, bilingual consent, basic eRx

The core of the MVP is secure, accessible communication, not complex AI.

1. **Multi-Modal Teleconsultations**: To ensure access across varying connectivity levels, the platform must support video calls with adaptive bitrate, audio-only calls as a fallback, and asynchronous chat/messaging for areas with intermittent internet. [recommended_mvp_scope.prioritized_feature_set[0]][15]
2. **Human-in-the-Loop (HITL) Triage**: A workflow where licensed triage nurses or GPs review all incoming patient requests to assess urgency and route them appropriately. This is a non-negotiable clinical safety feature. [recommended_mvp_scope.prioritized_feature_set[0]][15]
3. **Basic e-Prescription (eRx) for Kazakhstan**: The ability to generate a digitally signed document or QR code compliant with the 'e-Densaulyq' service, allowing patients to get medication. [recommended_mvp_scope.prioritized_feature_set[0]][15]
4. **Multilingual UX**: Full, professional support for **Russian and Kazakh** is mandatory for the initial launch, covering all interfaces, consent forms, and notifications. [recommended_mvp_scope.prioritized_feature_set[0]][15]
5. **User Profiles & Basic Health Records**: Secure profiles for patients and doctors to view consultation history, notes, and prescriptions, with all data stored in compliance with Kazakhstan's data localization laws. [recommended_mvp_scope.prioritized_feature_set[0]][15]

### 4.2 Deferred Features — symptom checker, auto-lab interpretation, full pharmacy sync

These features are deliberately excluded from the MVP to avoid regulatory delays and reduce complexity.

* **AI-Powered Symptom Checker**: Deferred as it would classify the MVP as a high-risk medical device, requiring a 6-12 month registration process.
* **Automated Lab Results Interpretation**: Deferred for the same reason. The MVP will allow users to upload and discuss results with a doctor, but not provide automated analysis.
* **Advanced Specialist Routing**: The MVP will use manual routing by the triage team.
* **Full Pharmacy Integration**: Real-time inventory and pricing integration is a post-launch enhancement.
* **Comprehensive Appointment Scheduling**: A simple request system will be used initially, with a full calendar system to follow.

### 4.3 Go/No-Go Checklist — usability >80%, zero critical vulns, sovereign hosting live

Launch is contingent on passing a rigorous, multi-faceted validation plan.

| Validation Area | Method | Go/No-Go Criteria |
| :--- | :--- | :--- |
| **Usability** | Moderated testing with 10-15 local users (Kazakh/Russian). | **Go:** >80% of users complete core workflow without significant friction. |
| **Clinical Safety** | Formal review and approval by a panel of locally licensed medical professionals. | **Go:** Written approval of all clinical protocols and workflows. |
| **Security** | Mandatory third-party penetration test and compliance audit. | **Go:** No critical or high-severity vulnerabilities remain un-remediated. |
| **Compliance** | Verification of data hosting infrastructure. | **Absolute Blocker (No-Go):** Failure to secure and implement a compliant data localization solution on servers physically located in Kazakhstan. |

## 5. Technology Blueprint — Open-Source Core, Licensed Edge

The architecture is dictated by the non-negotiable requirement for sovereign hosting. This mandates a fully self-hostable, open-source stack, eliminating reliance on international SaaS providers. The entire infrastructure must be deployed in a certified Kazakh data center (e.g., QazCloud) using a container-based architecture (Kubernetes) for portability. [recommended_technology_stack.core_architectural_principle[0]][2]

### 5.1 Backend: FHIR-Native and Self-Hostable

The backend must be built on the FHIR standard to ensure future interoperability, especially with Uzbekistan's national strategy.

| Component | Recommendation | Justification |
| :--- | :--- | :--- |
| **FHIR Server (CDR)** | **LinuxForHealth FHIR Server** or **HAPI FHIR** | Mature, open-source (Apache-2.0) Java implementations of FHIR R4/R4B. Can be deployed in any sovereign environment. [recommended_technology_stack.backend_and_data_management[0]][26] |
| **Consent & Audit** | **OpenHIM** + **Keycloak** + FHIR `Consent` resource | OpenHIM provides a critical audit trail for every transaction. The FHIR `Consent` resource allows for auditable storage of patient consent. [recommended_technology_stack.backend_and_data_management[1]][27] |
| **Data Storage** | PostgreSQL with **Transparent Data Encryption (TDE)** | Ensures all clinical data stored by the FHIR server is encrypted at rest. |

### 5.2 Security Stack: Zero-Trust, Deployed Locally

Security cannot be an afterthought; it must be built-in using dedicated, self-hostable tools.

| Component | Recommendation | Justification |
| :--- | :--- | :--- |
| **Identity (IAM)** | **Keycloak** | Mature, self-hostable IAM supporting OIDC for fine-grained, role-based access control. [recommended_technology_stack.security_and_identity[0]][10] |
| **Secrets (KMS)** | **HashiCorp Vault** | Centralized, secure, and auditable system for managing all encryption keys and API secrets, deployed in-country. [recommended_technology_stack.security_and_identity[0]][10] |
| **Logging** | **OFK/EFK Stack** (OpenSearch/Elasticsearch, Fluentd, Kibana) | Powerful, self-hostable solution for aggregating logs and creating security alerts for compliance audits. [recommended_technology_stack.security_and_identity[0]][10] |

### 5.3 Communication Layer: Self-Hosted to Guarantee Data Sovereignty

Using third-party communication platforms risks leaking patient metadata. A self-hosted solution is mandatory.

| Component | Recommendation | Justification |
| :--- | :--- | :--- |
| **Video/Voice** | **Jitsi Meet** or **OpenVidu** | Open-source WebRTC platforms that can be self-hosted, guaranteeing all media streams and signaling data remain within Kazakhstan. [recommended_technology_stack.communication_and_interaction[0]][27] |
| **Secure Messaging** | **Matrix Protocol** (Synapse/Dendrite homeserver) | Open standard for secure, decentralized communication with end-to-end encryption. A self-hosted homeserver provides complete data control. [recommended_technology_stack.communication_and_interaction[0]][27] |
| **Scheduling/Payments** | **Custom-built module** using FHIR resources | A healthcare-specific scheduler built on the FHIR model (`Appointment`, `Schedule`) ensures seamless integration. Payments require direct integration with local gateways. [recommended_technology_stack.communication_and_interaction[0]][27] |

### 5.4 Cloud Topology: Single-Tenant Kubernetes in a Sovereign Cloud

The deployment architecture must be a single-tenant Kubernetes cluster running within a certified local cloud provider like QazCloud. This ensures physical data residency and logical separation. All inter-service communication must be encrypted via TLS 1.2+, and the environment should include a geographically separate, air-gapped disaster recovery site, also within Kazakhstan.

## 6. AI Model Strategy & Safety Controls

The AI strategy prioritizes safety, compliance, and performance, starting with proven frontier models and creating a path to optimize with open-source alternatives.

### 6.1 Frontier vs. Open-Source Cost & Capability Matrix

For the MVP, the speed, multilingual strength, and compliant deployment options of frontier models outweigh the long-term cost benefits of open-source.

| Model Family | Strengths | Weaknesses / Limitations | MVP Recommendation |
| :--- | :--- | :--- | :--- |
| **OpenAI GPT-4o / Mini** | SOTA performance, fast, multimodal, strong non-English support, available via HIPAA-eligible Azure. [ai_model_strategy.model_selection_analysis[0]][28] [ai_model_strategy.model_selection_analysis[3]][29] | Performance on Kazakh/Uzbek needs testing; can confuse Kazakh and Russian. | **Top Choice** for backend reasoning (GPT-4o) and user-facing chat (Mini). |
| **Anthropic Claude 3.5** | Excellent reasoning, large 200K token context, robust multilingual performance. [ai_model_strategy.model_selection_analysis[1]][30] [ai_model_strategy.model_selection_analysis[2]][31] | May require English prompts for Kazakh; data residency on some clouds needs careful configuration. | **Strong Alternative**, especially Haiku for speed and Sonnet for complex tasks. |
| **ISSAI KAZ-LLM** | Natively supports Kazakh, Russian, English; trained on 150B+ Kazakh tokens. | **Non-commercial license (CC-BY-NC)** makes it unusable for a commercial product. | Use for benchmarking and research only. |
| **Meditron** | Medically pre-trained, commercially permissive license (Apache-2.0). | **Not for production use** without extensive fine-tuning and clinical trials. | Foundational model for future, not MVP. |
| **GigaChat** | Open-source, specifically for Russian language. | Requires fine-tuning and validation. | A post-MVP option for cost optimization on Russian interactions. |

**Key Takeaway**: Start with GPT-4o or Claude 3.5 via a compliant cloud provider. Plan a phased migration to fine-tuned, self-hosted open-source models post-launch to control long-term costs.

### 6.2 RAG Pipeline Architecture — preventing hallucinations with a curated clinical corpus

It is a critical safety failure to rely on the base knowledge of any LLM for medical information. The core technical safeguard must be a **Retrieval-Augmented Generation (RAG)** system. This architecture ensures that the LLM does not "hallucinate" or invent medical facts.

1. **User Query**: A user asks a health-related question.
2. **Retrieve**: The system first searches a private, curated knowledge base of trusted medical documents (e.g., approved clinical guidelines, medical textbooks adapted for the region).
3. **Augment**: The relevant, factual information retrieved from the knowledge base is inserted into the prompt sent to the LLM.
4. **Generate**: The LLM is instructed to generate its response *only* using the provided factual context.

This forces the model to act as a reasoning engine on a trusted dataset, not as a source of knowledge itself.

### 6.3 Continuous Evaluation — KazMMLU scores, red-teaming, and drift alarms

A multi-layered evaluation protocol is non-negotiable.

* **Safety Guardrails**: Implement input/output filters to block inappropriate queries and scan for harmful content. Every AI interaction must be accompanied by a clear disclaimer that it is not medical advice. 
* **Human-in-the-Loop (HITL)**: As mandated by Kazakhstan's draft AI law, all clinically relevant AI outputs must be reviewed, edited, and approved by a licensed medical professional before being sent to a patient. This is the ultimate safety net and a source of high-quality data for future fine-tuning. 
* **Evaluation Protocol**: Before deployment, models must be tested on benchmarks like the **KazMMLU dataset** for Kazakh/Russian accuracy. In production, performance must be continuously monitored for model drift. Regular "red-teaming" exercises, where experts try to break the model, are essential for identifying and patching vulnerabilities. 

## 7. Monetisation Roadmap — From Pay-Per-Consult to PEPM Scale

The monetization strategy must acknowledge the region's price sensitivity and prioritize B2B2C channels for sustainable growth. The goal is to de-risk market entry with a low-barrier B2C model and then scale through partnerships.

### 7.1 Tiered B2C Pricing vs. Median Income Sensitivity

A pay-per-consult model is ideal for the MVP launch to validate product-market fit without requiring user commitment. Pricing must be localized and tiered.

| Tier | Service | Proposed Price (USD) | Rationale & Benchmarks |
| :--- | :--- | :--- | :--- |
| **Tier 1** | Quick Question / Follow-up (5-10 min) | **$5 - $7** | Competitive with Yandex.Health (~$5.50) and Med24.uz (~$4.70). |
| **Tier 2** | Standard GP/Pediatrician Consult (20-30 min) | **$15 - $20** | Mid-point benchmark against Yandex.Health (~$17) and the lower end of private clinics. |
| **Tier 3** | Specialist Consult | **$25 - $40** | Premium price, benchmarked against private clinics in Kazakhstan (~$28-$60). |

**Key Takeaway**: Even at $20, a consultation is **~11%** of the median monthly income in Kazakhstan. This reinforces the strategic importance of subsidized B2B2C models. [recommended_monetization_model.unit_economics_and_financials[0]][15]

### 7.2 Employer & Insurer PEPM Math — break-even scenarios at 10K covered lives

B2B and B2B2C partnerships are the primary engine for long-term growth.

* **Employer Partnerships**: Offer the service as a corporate wellness benefit to large companies. Pricing is a stable **Per Employee Per Month (PEPM)** fee. The value proposition is improved productivity and reduced absenteeism.
* **Insurer Partnerships**: Integrate the service as a covered benefit in private health insurance plans. Pricing can be PEPM or a capitation model. This reduces insurer claims costs by diverting non-urgent cases from expensive ERs.
* **Telco Partnerships**: Replicate the successful model of **Beeline Uzbekistan**, which bundles the 'hambi' telemedicine app into its family mobile tariffs. [recommended_monetization_model.b2b_and_b2b2c_models[0]][5] This provides immediate access to a massive user base via a revenue-sharing agreement.

### 7.3 Phased Revenue Plan

A phased rollout will validate the model and build a sustainable revenue base.

* **Phase 1 (Months 1-6): Market Validation**. Launch the B2C pay-per-consult model in Almaty or Tashkent. The goal is to gather data on CAC, user behavior, and COGS, not profit.
* **Phase 2 (Months 7-18): Scale and Diversify**. Introduce B2C subscription plans and actively sign the first B2B/B2B2C contracts with employers, insurers, or a telecom partner.
* **Phase 3 (Months 19+): Expansion and Integration**. Expand geographically and explore pathways for reimbursement under national insurance schemes like Kazakhstan's OSMS.

## 8. Partnership Playbooks

The right anchor partner can halve regulatory friction and accelerate market entry. The strategy must be tailored to each country's unique ecosystem.

### 8.1 Kazakhstan: Mediker + SHIF integration Gantt (6–12 mo)

The strategy in Kazakhstan is to integrate with its established, albeit fragmented, e-health infrastructure through a combination of public and private partnerships.

* **Priority Public Partners**:
 * **Ministry of Health & Republican Center of e-Health**: For regulatory alignment and guidance.
 * **Social Health Insurance Fund (SHIF)**: Critical for enabling reimbursement under the national insurance system (OSMS).
* **Priority Private Partner**:
 * **Mediker**: A large, nationally accredited medical assistance company with a network of clinics already participating in state-funded programs. Partnering with them provides immediate access to a network of licensed clinicians and an existing patient base.
* **Roadmap**:
 * **Months 1-3**: Conduct deep legal analysis and initiate engagement with the Ministry of Health, SHIF, and Mediker.
 * **Months 4-6**: Finalize contracts, including Data Protection Agreements (DPAs), and define a pilot scope.
 * **Months 7-9**: Begin technical integration with the national Electronic Health Passport (EHP) and Mediker's Medical Information System (MIS).
 * **Months 10-12**: Launch the pilot and monitor metrics to build a case for scaling.

### 8.2 Uzbekistan: IT-Med LLC mandatory gateway — MoU checklist

Market entry into Uzbekistan is dictated by its centralized, top-down digital health strategy.

* **Mandatory Partner**: **IT-Med LLC** is the state-affiliated entity responsible for implementing all healthcare IT. A formal partnership with them is a non-negotiable prerequisite for market entry. [executive_summary[0]][1]
* **Value Proposition**: Position the MVP as a secure, scalable platform that accelerates the goals of the 'Digital Uzbekistan-2030' strategy and helps connect all medical organizations to the national 'Unified Platform'.
* **Roadmap**:
 * **Months 1-3**: Immediate and intensive engagement with IT-Med LLC to establish a formal relationship.
 * **Months 4-6**: Secure a Memorandum of Understanding (MOU) and concurrently deploy physical server infrastructure within Uzbekistan to comply with data localization law.
 * **Months 7-9**: Collaboratively design a controlled pilot project with IT-Med LLC, including a significant training component for local medical workers.
 * **Months 10-12**: Launch the pilot to demonstrate a secure, compliant operational model that can serve as a blueprint for future telemedicine legislation.

## 9. Project Plan, Budget & Team

A lean, agile team leveraging a smart build-vs-buy strategy can deliver the compliance-first MVP in 3 months for under $250,000.

### 9.1 Lean Team Composition (8 FTEs)

The team is structured for speed and compliance, intentionally excluding a dedicated ML/NLP engineer for the MVP to mitigate regulatory risk.

| Role | FTE | Key Responsibilities |
| :--- | :--- | :--- |
| Product Manager | 1.0 | Strategy, backlog, stakeholder management. |
| Clinical Lead | 0.5 | Clinical safety, compliance, protocol design. |
| Backend Engineers | 2.0 | Build server-side app & APIs on sovereign cloud. |
| Mobile Engineers | 2.0 | Develop cross-platform patient & doctor apps. |
| QA Engineer | 1.0 | Manual and automated testing. |
| DevOps/SecOps Engineer | 1.0 | CI/CD, sovereign infrastructure, security controls. |
| Compliance/Legal Consultant | 0.5 | Kazakh data protection & healthcare law. |
| Localization Specialist | 0.5 | Professional translation (Kazakh/Russian). |

### 9.2 6×2-week Sprint Timeline with Milestones

The project is structured into six two-week sprints.

* **Sprint 0 (Setup)**: Finalize scope, select local cloud and video SDK vendors, set up environments.
* **Sprints 1-2 (Month 1)**: Build core infrastructure (auth, DB, user profiles). **Milestone 1: Foundational Setup Complete.**
* **Sprints 3-4 (Month 2)**: Develop core functionality (video SDK integration, appointment logic). **Milestone 2: First End-to-End Video Call Achieved.**
* **Sprints 5-6 (Month 3)**: Harden and prepare for launch (compliant record storage, localization, pen test). **Milestone 3: MVP Feature-Complete and Ready for Pilot.**

### 9.3 Budget Table — salaries, cloud, SDK, security audit = $170–$250K

The budget prioritizes talent and mandatory compliance activities.

| Cost Category | Type | 3-Month Estimate (USD) | Notes |
| :--- | :--- | :--- | :--- |
| **Team Salaries** | CapEx | $127,500 - $178,500 | Largest cost component, based on 8 FTEs. |
| **Third-Party Pen Test** | CapEx | $10,000 - $20,000 | Mandatory for security validation. |
| **Sovereign Cloud Hosting** | OpEx | $1,500 - $6,000 | Monthly cost of $500 - $2,000 in Kazakhstan. |
| **Video API/SDK License** | OpEx | $2,250 - $3,000 | Monthly cost of $750 - $1,000. |
| **SMS/Notifications** | OpEx | $150 - $300 | Monthly cost of $50 - $100. |
| **Subtotal** | | **$141,400 - $207,800** | |
| **Contingency (20%)** | | $28,280 - $41,560 | Strongly recommended for unforeseen challenges. |
| **Grand Total** | | **$169,680 - $249,360** | |

### 9.4 Build-vs-Buy Decision Matrix — video BUY, core BUILD

The analysis is clear: buy commodity components, build the compliant core.

| Component | Recommendation | Rationale |
| :--- | :--- | :--- |
| **Video Component** | **BUY** | Building a reliable, scalable WebRTC solution is too complex and time-consuming for a 3-month MVP. Licensing a commercial SDK is the only viable path. |
| **Core Telemedicine Platform** | **BUILD** | White-label platforms pose an unacceptable compliance risk due to strict data localization laws. Building the core platform in-house is the most reliable way to ensure full regulatory control. |

## 10. Risk Register & Mitigation Tracker

A proactive risk management plan is essential. The top risks are clinical, data-related, and regulatory, and can be neutralized with a human-in-the-loop design and a sovereign hosting architecture.

### 10.1 Clinical, Data, AI, and Regulatory Risks in RAG Table

| Risk Category | Risk Description | Likelihood | Impact | Mitigation Strategy & Owner |
| :--- | :--- | :--- | :--- | :--- |
| **Clinical Safety** | Misdiagnosis or failure to escalate high-risk patients due to AI limitations. | Medium | High | **Mitigation:** Mandatory Human-in-the-Loop (HITL) workflow for all clinical outputs; restrictive scope of practice; clinician training. **Owner:** Clinical Lead. |
| **Data Protection** | Data breach of sensitive health information; non-compliance with data localization laws. | Medium | High | **Mitigation:** Deploy entire platform on sovereign hosting in KZ/UZ; implement strong consent framework; end-to-end encryption; regular 3rd-party security audits. **Owner:** DevOps/SecOps Engineer. |
| **AI Model** | Algorithmic bias, hallucinations, or model drift leading to incorrect information. | High | High | **Mitigation:** Classify AI as 'high-risk'; use Retrieval-Augmented Generation (RAG) architecture; continuous monitoring and red-teaming. **Owner:** Product Manager. |
| **Regulatory** | Providing services without proper clinician licensing; failure to register SaMD. | High | High | **Mitigation:** Ensure all clinicians are licensed in the patient's country; proactively plan for the 6-12 month EAEU SaMD registration process. **Owner:** Compliance/Legal Consultant. |
| **Geopolitical** | Service disruption due to reliance on vendors in unstable or sanctioned regions. | Low | High | **Mitigation:** Extensive geopolitical due diligence on all vendors; prioritize partners from stable regions with transparent operations. **Owner:** Product Manager. |

## Action Checklist

1. **Legal Opinion**: Secure a formal legal opinion on data protection and telemedicine laws in Kazakhstan and Uzbekistan.
2. **Partner Engagement**: Initiate contact with the Kazakhstan Ministry of Health, SHIF, and Mediker.
3. **Partner Engagement (UZ)**: Initiate contact with IT-Med LLC in Uzbekistan.
4. **Vendor Selection**: Select and contract with a certified sovereign cloud provider in Kazakhstan.
5. **Vendor Selection**: Select and license a commercial, HIPAA-compliant video SDK.
6. **Team Assembly**: Hire or assign the 8-FTE core MVP team.
7. **Sprint 0**: Finalize MVP scope and set up all development and cloud environments.
8. **DPIA**: Initiate the Data Protection Impact Assessment.
9. **Milestone 1**: Complete foundational infrastructure build (auth, DB, profiles).
10. **Clinical Panel**: Assemble and engage the local clinical advisory panel in Kazakhstan.
11. **Milestone 2**: Achieve the first successful end-to-end video call on the platform.
12. **Security Audit**: Engage a third party to conduct a full penetration test.
13. **Remediation**: Remediate all critical and high-severity security findings.
14. **Milestone 3**: Achieve MVP feature-complete status.
15. **Pilot Launch**: Launch the controlled pilot with the partner clinic in Kazakhstan.

## References

1. *[PDF] TELEMEDICINE REGULATION - Intelehealth*. https://intelehealth.org/wp-content/uploads/2023/06/TELEMEDICINE-REPORT-12-June-2023.pdf
2. *[PDF] Data Localization Laws: Overview (Kazakhstan) - Morgan Lewis*. https://www.morganlewis.com/-/media/files/publication/outside-publication/article/2024/data-localization-laws-overview-kazakhstan.pdf?rev=-1&hash=0E7F2543D2F33CCF5BA9B9CCF484C8C2
3. *New approaches to personal data in Uzbekistan: security ...*. https://www.uzembassy.uk/news/881
4. *AI Regulation in Kazakhstan: Key Regulatory Developments*. https://digital.nemko.com/regulations/ai-regulation-kazakhstan
5. *Beeline Uzbekistan adds telemedicine service to Oila tariff*. https://www.telecompaper.com/news/beeline-uzbekistan-adds-telemedicine-service-to-oila-tariff--1545854
6. *[PDF] Data Protection in Kazakhstan: Overview - Morgan Lewis*. https://www.morganlewis.com/-/media/files/publication/outside-publication/article/2023/data-protection-in-kazakhstan-overview.pdf
7. *Draft Law of the Republic of Kazakhstan “On Artificial ...*. https://www.legal500.com/developments/thought-leadership/draft-law-of-the-republic-of-kazakhstan-on-artificial-intelligence-principles-of-regulation-and-practical-aspects/
8. *ON PUBLIC HEALTH AND HEALTHCARE SYSTEM - "Adilet" LIS*. https://adilet.zan.kz/eng/docs/K2000000360
9. *Resolution of the Republic of Kazakhstan No.832 of 20 December ...*. https://www.dataguidance.com/legal-research/resolution-republic-kazakhstan-no832-20-december-2016-approval-unified-requirements
10. *Transfer in Uzbekistan - Data Protection Laws of the World*. https://www.dlapiperdataprotection.com/?t=transfer&c=UZ
11. *Вопросы правового регулирования телемедицины в ...*. https://uzmedlib.uz/voprosi-pravovogo-regulirovaniya-telemeditsini-v-respublike-uzbekistan
12. *Government of Uzbekistan approves list of projects for AI ...*. https://www.gazeta.uz/en/2025/08/09/ai-in-project/
13. *О Критериях отнесения продукции к медицинским изделиям в ...*. https://adilet.zan.kz/rus/docs/H18RK000025
14. *Telemedicine in Kazakhstan: smart health services delivery*. https://www.who.int/europe/ru/news-room/photo-stories/item/telemedicine-in-kazakhstan-smart-health-services-delivery
15. *Telemedicine in Kazakhstan: smart health services delivery*. https://www.who.int/europe/news-room/photo-stories/item/telemedicine-in-kazakhstan-smart-health-services-delivery
16. *Ada Health - Crunchbase Company Profile & Funding*. https://www.crunchbase.com/organization/adahealth
17. *Yandex sells telemedicine direction*. https://www.akm.ru/eng/news/yandex-sells-telemedicine-direction/
18. *СберЗдоровье — телемедицина - Apps on Google Play*. https://play.google.com/store/apps/details?id=com.docdoc.docdoc&hl=en&gl=RU
19. *Babylon Health*. https://en.wikipedia.org/wiki/Babylon_Health
20. *Infermedica Features, Alternatives & More 2025*. https://www.capterra.com/p/167951/Infermedica-API/
21. *Virtual Primary Care Made Easy, 24/7 - K Health*. https://khealth.com/primary-care/
22. *In Kazakhstan, Artificial Intelligence and the Research ...*. https://www.worldbank.org/en/news/feature/2022/04/14/in-kazakhstan-artificial-intelligence-and-the-research-commercialization-behind-it-is-saving-lives
23. *DEN170073 Summary - accessdata.fda.gov*. https://www.accessdata.fda.gov/cdrh_docs/reviews/DEN170073.pdf
24. *The Real-World Impact of Artificial Intelligence on Diabetic ...*. https://pmc.ncbi.nlm.nih.gov/articles/PMC8120063/
25. *Artificial Intelligence and Diabetic Retinopathy: AI Framework ...*. https://diabetesjournals.org/care/article/46/10/1728/153626/Artificial-Intelligence-and-Diabetic-Retinopathy
26. *The LinuxForHealth FHIR® Server and related projects - GitHub*. https://github.com/LinuxForHealth/FHIR
27. *[PDF] Integrated Approaches for Digital Health Transformation in Kazakhstan*. https://mptf.undp.org/sites/default/files/documents/2025-04/extracted_from_kazakhstan_prodoc_141119.pdf
28. *Hello GPT-4o - OpenAI*. https://openai.com/index/hello-gpt-4o/
29. *Azure OpenAI Service - Pricing*. https://azure.microsoft.com/en-us/pricing/details/cognitive-services/openai-service/
30. *Multilingual support - Claude Docs*. https://docs.claude.com/en/docs/build-with-claude/multilingual-support
31. *Introducing Claude 3.5 Sonnet - Anthropic*. https://www.anthropic.com/news/claude-3-5-sonnet