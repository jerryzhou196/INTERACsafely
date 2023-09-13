import React, { useState, useEffect } from "react";
import "./emailform.css";
import logo from "../assets/logo.png";
import AnalyzeCompliance from "./AnalyzeCompliace";
import Popup from "./Popup";
import { ThreeCircles } from "react-loader-spinner";

const EmailForm: React.FC = () => {
  const [text, setText] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [showPopup, setShowPopup] = useState(true);
  const [showLoading, setShowLoading] = useState(false);
  const handleClick = () => {
    setShowLoading(true);
    async function fetchCompletion() {
      const url = "https://api.openai.com/v1/chat/completions";
      const token = localStorage.getItem("token");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const body = JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              'Your responses are going to be converted into a report that reflects how well the following emails comply with Interac\'s Compliance Policy. As a result, all your responses must be formatted as a JSON object. This JSON object should have an overall score in terms of percentage that reflects how well the email follows under the "score" property. In addition, it must have an array called quotes which contains key-value pairs - the key should be called "quote" and should be directly phrasing certain sentences within the email that violate any policies. The value should be called "comment" and you will write a short comment about why the quote violates any policies. The higher the score, the worst. You must put some quotes.',
          },
          {
            role: "system",
            content: `
            1. OBJECTIVES

The protection of the personal data of the individuals with whom we interact in the course of our professional activity is an important concern for ICMCI (hereinafter referred to as "ICMCI"). In doing so, this policy is a statement of principles on the management of personal data, complements relevant legislation and is binding on ICMCI, no matter where it operates.

This data protection policy applies to ICMCI, but also to any existing subsidiary of ICMCI, existing or to be established, to senior management and their employees.

This privacy policy provides for the necessary framework conditions to ensure an adequate level of data protection in accordance with the provisions of Regulation (EU) 2016/679 on the protection of individuals with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46 / EC, hereinafter referred to as the "Regulation" or "GDPR", which is directly applicable in all Member States of the European Union as of 25 May 2018 and the national data protection legislation.

The policy outlines ICMCI's basic principles on personal data protection and data security standards and ensures compliance with applicable European data protection laws ("Applicable Law"). Consequently, it includes data protection principles, agreed at European level, with the intention not to substitute, but to supplement the respective laws on personal data protection and confidentiality.

The policy extends to the processing of all personal data. If ICMCI owns or will have branches in countries where data from legal entities are protected to the same extent as personal data, the Policy will apply equally to the data of legal entities.

In the event of discrepancies between these Personal Data Management Policies and the provisions of the Data Protection Legislation, the latter will prevail.

2. TERMINOLOGY

In this Privacy Policy, the following terms will be defined as follows:

"Supervisory Authority" means the national authorities for the surveillance of personal data processing or any other authority to which data protection responsibilities are assigned under the Data Protection Law of any Member State;

"Special categories of personal data" means personal data revealing racial or ethnic origin, political, religious or philosophical beliefs, membership of trade unions, genetic data and biometric data, health, life, or sexual orientation data of a natural person;

"Consent” the unadulterated consent of the data subject to have his or her personal data processed, which must always be express and unambiguous;

"Profiling" means any form of automatic processing of personal data consisting of the use of personal data to assess certain personal aspects relating to a natural person, in particular to analyze or predict performance issues in the workplace, the economic situation, health, personal preferences, interests, reliability, behavior, the place of the individual or his movements;

"Biometric data" means personal data resulting from specific processing techniques relating to the physical, physiological or behavioral characteristics of a natural person that allow or confirm the unique identification of that person, such as facial images or dactyloscopic data; Biometrics are included in the Special Categories of Personal Data;

"Personal data" means any information about an identified or identifiable natural person that is protected under the Data Protection Legislation; an identifiable natural person is a person who can be identified, directly or indirectly, in particular by reference to an identifier, such as a name, an identification number, location data, an online identifier, or one or more many specific elements of his physical, physiological, genetic, psychic, economic, cultural or social identity; for the purpose of this Privacy Policy, Personal Data includes Personal Data relating to criminal convictions and offenses and Special Categories of Personal Data;

"Personal data relating to criminal convictions and offenses" means personal data relating to criminal convictions, offenses and / or pardons;

"Genetic data" means personal data relating to the inherited or acquired genetic characteristics of a natural person that provide unique information on the physiology or health of the Data Subject, resulting in particular from a sample of a biological material harvested by the Data Subject; Genetic data are included in the Special Categories of Personal Data;

"Health data" means personal data relating to the physical or mental health of a natural person, including the provision of healthcare services, which reveals information about his / her state of health; Health data is included in the Special Categories of Personal Data;

"Disclosure" means the action of transmitting, disseminating, making available in any other way personal data outside the operator;

"Processing records" means records kept by ICMCI that provide an overview of all processing activities (eg what kind of personal data are Processed, by which organizational units and which is the purpose of Processing);

"GDPR" means Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of individuals with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/;

"Violation of personal data security" means a security breach that accidentally or illegally causes unauthorized destruction, loss, alteration, or disclosure of personal data transmitted, stored or otherwise processed, or unauthorized access to them;

"Level of protection and security of personal data processing" means the level of security proportionate to the risk that the processing involves in relation to that Personal Data and to the rights and freedoms of individuals and to the minimum security requirements for data processing, developed by the Supervisory Authority and updated in line with the state of technological development and the costs of implementing these measures;

"Operator" means the entity that, alone or with others, establishes the purposes and means of processing Personal Data;

"Third Party" means a natural or legal person, public authority, agency or body other than the Data Subject, the Operator, the Person Appointed by the Operator, and persons authorized under the direct authority of the Operator or the Person Entitled to Operator to process data with personal character;

“Processor” means the natural or legal person, public authority, agency or other body processing personal data on behalf of the operator;

"Data Subject" means the identified or identifiable person to whom Personal Data refers; for reasons related to this policy, the Individuals concerned may be employees, customers, representatives of business partners and any other natural person whose Personal Data is processed by ICMCI;

"Processing" means any operation or set of operations performed on personal data or on personal data sets with or without the use of automated means such as the collection, recording, organization, structuring, storage, adaptation or modification, extraction, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction;

"Automated decision-making process" means a process in which input data is evaluated solely by IT devices, without the involvement of individuals, for example, according to predefined criteria / algorithms, the last decision having significant consequences for the Data Subject;

"Pseudonymization" means the processing of personal data in such a way that it can no longer be attributed to a particular data subject without the use of additional information, provided that such additional information is stored separately and is subject to technical and organizational nature to ensure that such personal data are not allocated to an identified or identifiable natural person;

"Restriction of processing" means the marking of stored personal data in order to limit its future processing;

"Transfer" means the disclosure or otherwise making available to third parties (including Sub-Officers) of Personal Data either by sending Personal Data to that third party or by allowing access to such data by other means; storage and copying will be considered transfer within the meaning of this Privacy Policy;

"Use" means the use of personal data by and within the Operator;

 

3. PRINCIPLES FOR THE PROCESSING OF PERSONAL DATA

Protection of Personal Data is the responsibility of each employee/contractor of ICMCI.

Data protection legislation requires ICMCI to comply with the following principles:

Legality and fairness
Personal data will be collected and processed legally and correctly in relation to the Data Subject in order to protect the individual rights of data subjects.

Limitation of purpose
Personal data will only be collected for determined, explicit and legitimate purposes, defined prior to data collection and communicated to the intended person. The purpose of the processing should have a legal basis. Subsequent changes to the purpose are possible only to a limited extent and require a solid foundation.

Transparency
The data subject must be informed of the way his or her data is processed. In general, personal data must be collected directly from the Data Subject. When data is collected, the Data Subject must be aware of or be informed about what ICMCI does with Personal Data (regardless of the quality of the Data Subject). The fact that ICMCI obtains the Personal Data of a natural person who is a legal person or who is employed by a legal person does not mean that Personal Data belonging to that person are less important or are exempted from protection.

Accurate and timely data
Personal data must be accurate, complete and, if necessary, updated. Permanent measures must be taken to ensure that inaccurate or incomplete data is deleted, corrected, supplemented or updated.

Reduce data and minimize data
Personal data will be appropriate, relevant, and limited to the strict minimum. Before processing Personal Data, ICMCI will determine whether and to what extent the processing of Personal Data is necessary to achieve the purpose for which it is performed. Where the goal permits and where the costs involved are proportionate to the objective, anonymous data should be used.

Storage limit
Personal data will be retained in a form that permits the identification of the Individuals concerned for as long as it is necessary to fulfill the purpose for which Personal Data is processed. Personal data will not be retained for a longer period of time than necessary.

Integrity and confidentiality
Personal data will be processed in such a way as to protect against unauthorized or unlawful processing, as well as against accidental loss, destruction or deterioration, and by using appropriate technical, organizational and security measures.

Rights of the persons concerned
ICMCI respects the rights of all Data Subjects and treats seriously any Personal Data request, allowing the Individuals to correct, delete or restrict the processing of their Personal Data.

Delete Personal Data
The retention period of the data will be defined. ICMCI removes personal data that is no longer necessary for the purposes for which it was collected or if consent is withdrawn and no other legitimate purpose for data processing is applied.

Security of data processing / data security
Personal data will be processed safely. Appropriate technical and operational measures concerning data security, unauthorized processing or alteration, loss or destruction, and against unauthorized disclosure and unauthorized access to personal data transmitted, stored or processed shall be taken. ICMCI fully assures the integrity, availability, confidentiality and authenticity of Personal Data. In the event of an incident, ICMCI must have the ability to restore in a timely manner the availability and access to Personal Data.

Implied protection of personal data
ICMCI will implement appropriate technical and organizational measures to ensure that personal data is processed for the specified purposes. The principle of implied data protection will be observed during the development of new products.

Responsibility in the processing of personal data
ICMCI, as an Operator, will be responsible for compliance with the Data Protection Legislation and will have to demonstrate compliance with it.
`,
          },
          {
            role: "system",
            content: `The following is the email. ${text}`,
          },
        ],
      });

      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: body,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert(`${data.choices[0].message.content}`);
        setShowLoading(false);
      } else {
        console.error("Failed to fetch:", response.status, response.statusText);
        alert("API Error. See console for details.");
      }
    }
    fetchCompletion();
  };

  const handleTokenSubmit = (token: string) => {
    // Do something with the token, e.g., set up API calls
    localStorage.setItem("token", token);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {
    const fullPlaceholder =
      "Insert your possibly insecure Outlook Email here to see if it complies with Interac's Compliance Policy!";
    let currentText = "";

    const typing = setInterval(() => {
      if (currentText.length < fullPlaceholder.length) {
        currentText += fullPlaceholder[currentText.length];
        setPlaceholder(currentText);
      } else {
        clearInterval(typing);
      }
    }, 50);

    return () => {
      clearInterval(typing);
    };
  }, []);

  return (
    <div className="container">
      {showPopup && (
        <Popup
          onClose={() => setShowPopup(false)}
          onTokenSubmit={handleTokenSubmit}
        />
      )}
      <img className="logo-background" src={logo} alt="logo" />
      <textarea
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
        className="giant-textarea"
      />

      {showLoading && (
        <div className="loading">
          <ThreeCircles
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        </div>
      )}
      <AnalyzeCompliance prompt={text} handleClick={handleClick} />
    </div>
  );
};

export default EmailForm;
