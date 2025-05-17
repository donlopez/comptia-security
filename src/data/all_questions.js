export const questions = [
    {
      question: "Matt is updating the organization's threat assessment process. What category of control is Matt implementing?",
      choices: ["Operational", "Technical", "Corrective", "Managerial"],
      answer: "D",
      explanation: "Managerial controls are procedural mechanisms that focus on the mechanics of the risk management process. Threat assessment is an example of one of these activities."
    },
    {
      question: "Jade's organization recently suffered a security breach that affected stored credit card data. Jade's primary concern is the fact that the organization is subject to sanctions for violating the provisions of the Payment Card Industry Data Security Standard. What category of risk is concerning Jade?",
      choices: ["Strategic", "Compliance", "Operational", "Financial"],
      answer: "B",
      explanation: "The breach of credit card information may cause many different impacts on the organization, including compliance, operational, and financial risks. However, in this scenario, Jade's primary concern is violating PCI DSS, making his concern a compliance risk."
    },
    {
      question: "Chris is responding to a security incident that compromised one of his organization's web servers. He believes that the attackers defaced one or more pages on the website. What cybersecurity objective did this attack violate?",
      choices: ["Confidentiality", "Nonrepudiation", "Integrity", "Availability"],
      answer: "C",
      explanation: "The defacement of a website alters content without authorization and is, therefore, a violation of the integrity objective. The attackers may also have breached the confidentiality or availability of the website, but the scenario does not provide us with enough information to draw those conclusions."
    },
    {
      question: "Gwen is exploring a customer transaction reporting system and discovers the table shown here. What type of data minimization has most likely been used on this table?",
      choices: ["Destruction", "Masking", "Tokenization", "Hashing"],
      answer: "B",
      explanation: "In this case, the first 12 digits of the credit card have been removed and replaced with asterisks. This is an example of data masking."
    },
    {
      question: "Tonya is concerned about the risk that an attacker will attempt to gain access to her organization's database server. She is searching for a control that would discourage the attacker from attempting to gain access. What type of security control is she seeking to implement?",
      choices: ["Preventive", "Detective", "Corrective", "Deterrent"],
      answer: "D",
      explanation: "Deterrent controls are designed to prevent an attacker from attempting to violate security policies in the first place. Preventive controls would attempt to block an attack that was about to take place. Corrective controls would remediate the issues that arose during an attack. Detective controls detect issues or indicators of issues."
    },
    {
      question: "Greg is implementing a data loss prevention system. He would like to ensure that it protects against transmissions of sensitive information by guests on his wireless network. What DLP technology would best meet this goal?",
      choices: ["Watermarking", "Pattern recognition", "Host-based", "Network-based"],
      answer: "D",
      explanation: "In this case, Greg must use a network-based DLP system. Host-based DLP requires the use of agents, which would not be installed on guest systems. Greg may use watermarking and/or pattern recognition to identify the sensitive information, but he must use network-based DLP to meet his goal."
    },
    {
      question: "What term best describes data that is being sent between two systems over a network connection?",
      choices: ["Data at rest", "Data in transit", "Data in processing", "Data in use"],
      answer: "B",
      explanation: "Data being sent over a network is data in transit. Data at rest is stored data that resides on hard drives, tapes, in the cloud, or on other storage media. Data in processing, or data in use, is data that is actively in use by a computer system."
    },
    {
      question: "Tina is tuning her organization's intrusion prevention system to prevent false positive alerts. What type of control is Tina implementing?",
      choices: ["Technical control", "Physical control", "Managerial control", "Operational control"],
      answer: "A",
      explanation: "Technical controls enforce confidentiality, integrity, and availability in the digital space. Examples of technical security controls include firewall rules, access control lists, intrusion prevention systems, and encryption."
    },
    {
      question: "Which one of the following is not a common goal of a cybersecurity attacker?",
      choices: ["Disclosure", "Denial", "Alteration", "Allocation"],
      answer: "D",
      explanation: "The three primary goals of cybersecurity attackers are disclosure, alteration, and denial. These map directly to the three objectives of cybersecurity professionals: confidentiality, integrity, and availability."
    },
    {
      question: "Tony is reviewing the status of his organization's defenses against a breach of their file server. He believes that a compromise of the file server could reveal information that would prevent the company from continuing to do business. What term best describes the risk that Tony is considering?",
      choices: ["Strategic", "Reputational", "Financial", "Operational"],
      answer: "A",
      explanation: "The risk that Tony is contemplating could fit any one of these categories. However, his primary concern is that the company may no longer be able to do business if the risk materializes. This is a strategic risk."
    },
    {
      question: "Which one of the following data elements is not commonly associated with identity theft?",
      choices: ["Social Security number", "Driver's license number", "Frequent flyer number", "Passport number"],
      answer: "C",
      explanation: "Although it is possible that a frequent flyer account number, or any other account number for that matter, could be used in identity theft, it is far more likely that identity thieves would use core identity documents. These include drivers' licenses, passports, and Social Security numbers."
    },
    {
      question: "What term best describes an organization's desired security state?",
      choices: ["Control objectives", "Security priorities", "Strategic goals", "Best practices"],
      answer: "A",
      explanation: "As an organization analyzes its risk environment, technical and business leaders determine the level of protection required to preserve the confidentiality, integrity, and availability of their information and systems. They express these requirements by writing the control objectives that the organization wishes to achieve. These control objectives are statements of a desired security state."
    },
    {
      question: "Lou mounted the sign below on the fence surrounding his organization's datacenter. What control type best describes this control?",
      choices: ["Compensating", "Detective", "Physical", "Deterrent"],
      answer: "D",
      explanation: "This question is a little tricky. The use of an actual guard dog could be considered a deterrent, physical, or detective control. It could even be a compensating control in some circumstances. However, the question asks about the presence of a sign and does not state that an actual dog is used. The sign only has value as a deterrent control. Be careful when facing exam questions like this to read the details of the question."
    },
    {
      question: "What technology uses mathematical algorithms to render information unreadable to those lacking the required key?",
      choices: ["Data loss prevention", "Data obfuscation", "Data minimization", "Data encryption"],
      answer: "D",
      explanation: "Encryption technology uses mathematical algorithms to protect information from prying eyes, both while it is in transit over a network and while it resides on systems. Encrypted data is unintelligible to anyone who does not have access to the appropriate decryption key, making it safe to store and transmit encrypted data over otherwise insecure means."
    },
    {
      question: "Greg recently conducted an assessment of his organization's security controls and discovered a potential gap: the organization does not use full-disk encryption on laptops. What type of control gap exists in this case?",
      choices: ["Detective", "Corrective", "Deterrent", "Preventive"],
      answer: "D",
      explanation: "The use of full-disk encryption is intended to prevent a security incident from occurring if a device is lost or stolen. Therefore, this is a preventive control gap."
    },
    {
      question: "What compliance regulation most directly affects the operations of a health-care provider?",
      choices: ["HIPAA", "PCI DSS", "GLBA", "SOX"],
      answer: "A",
      explanation: "Although a health-care provider may be impacted by any of these regulations, the Health Insurance Portability and Accountability Act (HIPAA) provides direct regulations for the security and privacy of protected health information and would have the most direct impact on a health-care provider."
    },
    {
      question: "Nolan is writing an after action report on a security breach that took place in his organization. The attackers stole thousands of customer records from the organization's database. What cybersecurity principle was most impacted in this breach?",
      choices: ["Availability", "Nonrepudiation", "Confidentiality", "Integrity"],
      answer: "C",
      explanation: "The disclosure of sensitive information to unauthorized individuals is a violation of the principle of confidentiality."
    },
    {
      question: "Which one of the following objectives is not one of the three main objectives that information security professionals must achieve to protect their organizations against cybersecurity threats?",
      choices: ["Integrity", "Nonrepudiation", "Availability", "Confidentiality"],
      answer: "B",
      explanation: "The three primary objectives of cybersecurity professionals are confidentiality, integrity, and availability."
    },
    {
      question: "Which one of the following data protection techniques is reversible when conducted properly?",
      choices: ["Tokenization", "Masking", "Hashing", "Shredding"],
      answer: "A",
      explanation: "Tokenization techniques use a lookup table and are designed to be reversible. Masking and hashing techniques replace the data with values that can't be reversed back to the original data if performed properly. Shredding, when conducted properly, physically destroys data so that it may not be recovered."
    },
    {
      question: "Which one of the following statements is not true about compensating controls under PCI DSS?",
      choices: [
        "Controls used to fulfill one PCI DSS requirement may be used to compensate for the absence of a control needed to meet another requirement.",
        "Controls must meet the intent of the original requirement.",
        "Controls must meet the rigor of the original requirement.",
        "Compensating controls must provide a similar level of defense as the original requirement."
      ],
      answer: "A",
      explanation: "PCI DSS compensating controls must be “above and beyond” other PCI DSS requirements. This specifically bans the use of a control used to meet one requirement as a compensating control for another requirement."
    },
    {
        question: "Which of the following measures is not commonly used to assess threat intelligence?",
        choices: ["Timeliness", "Detail", "Accuracy", "Relevance"],
        answer: "B",
        explanation: "Although higher levels of detail can be useful, they aren't a common measure used to assess threat intelligence. Instead, the timeliness, accuracy, and relevance of the information are considered critical to determining whether you should use the threat information."
      },
      {
        question: "Which one of the following motivations is most commonly attributed to hacktivists?",
        choices: ["War", "Financial gain", "Political/philosophical beliefs", "Ethical"],
        answer: "C",
        explanation: "Hacktivists are defined by the motivation behind their actions—advancing their political or philosophical beliefs. They engage in cyberattacks that they believe will advance their causes."
      },
      {
        question: "Kolin is a penetration tester who works for a cybersecurity company. His firm was hired to conduct a penetration test against a health-care system, and Kolin is working to gain access to the systems belonging to a hospital in that system. What term best describes Kolin's work?",
        choices: ["Authorized attacker", "Unauthorized attacker", "Unknown attacker", "Semi-authorized attacker"],
        answer: "A",
        explanation: "Attacks that are conducted as part of an authorized penetration test are white-hat hacking attacks, regardless of whether they are conducted by internal employees or an external firm. Kolin is, therefore, engaged in white-hat hacking. If he were acting on his own, without authorization, his status would depend on his intent. If he had malicious intent, his activity would be considered black-hat hacking. If he simply intended to report vulnerabilities to the hospital, his attack would be considered gray hat and he would likely be semi-authorized."
      },
      {
        question: "Which one of the following attackers is most likely to be associated with an APT?",
        choices: ["Nation-state actor", "Hacktivist", "Unskilled", "Insider"],
        answer: "A",
        explanation: "Advanced persistent threats (APTs) are most commonly associated with nation-state actors. It is unlikely that an APT group would leverage the unsophisticated services of an unskilled script kiddie type attacker. It is also unlikely that a hacktivist would have access to APT resources. Although APTs may take advantage of insider access, they are most commonly associated with nation-state actors."
      },
      {
        question: "Which organization did the U.S. government help create to share knowledge between organizations in specific verticals?",
        choices: ["DHS", "SANS", "CERTS", "ISACs"],
        answer: "D",
        explanation: "The U.S. government created the Information Sharing and Analysis Centers (ISACs). ISACs help infrastructure owners and operators share threat information, and provide tools and assistance to their members."
      },
      {
        question: "Which of the following threat actors typically has the greatest access to resources?",
        choices: ["Nation-state actors", "Organized crime", "Hacktivists", "Insider threats"],
        answer: "A",
        explanation: "Nation-state actors are government sponsored, and they typically have the greatest access to resources, including tools, money, and talent."
      },
      {
        question: "Of the threat vectors shown here, which one is most commonly exploited by attackers who are at a distant location?",
        choices: ["Email", "Direct access", "Wireless", "Removable media"],
        answer: "A",
        explanation: "Email is the most common threat vector exploited by attackers who use phishing and other social engineering tactics to gain access to an organization. The other vectors listed here, direct access, wireless, and removable media, all require physical proximity to an organization and are not easily executed from a remote location."
      },
      {
        question: "Which one of the following is the best example of a hacktivist group?",
        choices: ["Chinese military", "U.S. government", "Russian mafia", "Anonymous"],
        answer: "D",
        explanation: "The Chinese military and U.S. government are examples of nation-state actors and advanced persistent threats (APTs). The Russian mafia is an example of a criminal syndicate. Anonymous is the world's most prominent hacktivist group."
      },
      {
        question: "What type of assessment is particularly useful for identifying insider threats?",
        choices: ["Behavioral", "Instinctual", "Habitual", "IoCs"],
        answer: "A",
        explanation: "Behavioral assessments are very useful when you are attempting to identify insider threats. Since insider threats are often hard to distinguish from normal behavior, the context of the actions performed—such as after-hours logins, misuse of credentials, logins from abnormal locations, or abnormal patterns—and other behavioral indicators are often used."
      },
      {
        question: "Cindy is concerned that her organization may be targeted by a supply chain attack and is conducting a review of all of her vendor and supplier partners. Which one of the following organizations is least likely to be the conduit for a supply chain attack?",
        choices: ["Hardware provider", "Software provider", "Managed service provider", "Talent provider"],
        answer: "D",
        explanation: "Supply chain attacks are typically associated with vendors and suppliers that provide technology infrastructure or services that may be compromised. This would include hardware and software providers as well as managed service providers (MSPs). Talent providers, who help with staffing solutions, are generally not considered common avenues for supply chain attacks."
      },
      {
        question: "Greg believes that an attacker may have installed malicious firmware in a network device before it was provided to his organization by the supplier. What type of threat vector best describes this attack?",
        choices: ["Supply chain", "Removable media", "Cloud", "Direct access"],
        answer: "A",
        explanation: "Tampering with equipment before it reaches the intended user is an example of a supply chain threat. It is also possible to describe this attack as a direct access attack because it involved physical access to the device, but supply chain is a more relevant answer. You should be prepared to select the best possible choice from several possible correct answers when you take the exam. Security+ questions often use this type of misdirection."
      },
      {
        question: "Ken is conducting threat research on Transport Layer Security (TLS) and would like to consult the authoritative reference for the protocol's technical specification. What resource would best meet his needs?",
        choices: ["Academic journal", "Internet RFCs", "Subject matter experts", "Textbooks"],
        answer: "B",
        explanation: "All of these resources might contain information about the technical details of TLS, but Internet Request for Comments (RFC) documents are the definitive technical standards for Internet protocols. Consulting the RFCs would be Ken's best option."
      },
      {
        question: "Wendy is scanning cloud-based repositories for sensitive information. Which one of the following should concern her most, if discovered in a public repository?",
        choices: ["Product manuals", "Source code", "API keys", "Open source data"],
        answer: "C",
        explanation: "All of these items could be concerning, depending on the circumstances. However, API keys should never be found in public repositories because they may grant unauthorized individuals access to information and resources."
      },
      {
        question: "Which one of the following threat research tools is used to visually display information about the location of threat actors?",
        choices: ["Threat map", "Predictive analysis", "Vulnerability feed", "STIX"],
        answer: "A",
        explanation: "Threat maps are graphical tools that display information about the geographic locations of attackers and their targets. These tools are most often used as interesting marketing gimmicks, but they can also help identify possible threat sources."
      },
      {
        question: "Vince recently received the hash values of malicious software that several other firms in his industry found installed on their systems after a compromise. What term best describes this information?",
        choices: ["Vulnerability feed", "IoC", "TTP", "RFC"],
        answer: "B",
        explanation: "Specific details of attacks that may be used to identify compromises are known as indicators of compromise (IoCs). This data may also be described as an adversary tactics, techniques, and procedures (TTP), but the fact that it is a set of file signatures makes it more closely match the definition of an IoC."
      },
      {
        question: "Ursula recently discovered that a group of developers are sharing information over a messaging tool provided by a cloud vendor but not sanctioned by her organization. What term best describes this use of technology?",
        choices: ["Shadow IT", "System integration", "Vendor management", "Data exfiltration"],
        answer: "A",
        explanation: "The developers in question are using unapproved technology for business purposes. This is the classic definition of shadow IT. It is possible to describe this as data exfiltration, but there is no indication that the data security has been compromised, so shadow IT is a better description here. Remember, you will often be asked to choose the best answer from multiple correct answers on the exam."
      },
      {
        question: "Tom's organization recently learned that the vendor is discontinuing support for their customer relationship management (CRM) system. What should concern Tom the most from a security perspective?",
        choices: ["Unavailability of future patches", "Lack of technical support", "Theft of customer information", "Increased costs"],
        answer: "A",
        explanation: "Tom's greatest concern should be that running unsupported software exposes his organization to the risk of new, unpatchable vulnerabilities. It is certainly true that they will no longer receive technical support, but this is a less important issue from a security perspective. There is no indication in the scenario that discontinuing the product will result in the theft of customer information or increased costs."
      },
      {
        question: "Which one of the following information sources would not be considered an OSINT source?",
        choices: ["DNS lookup", "Search engine research", "Port scans", "WHOIS queries"],
        answer: "C",
        explanation: "Port scans are an active reconnaissance technique that probe target systems and would not be considered open source intelligence (OSINT). Search engine research, DNS lookups, and WHOIS queries are all open source resources."
      },
      {
        question: "Edward Snowden was a government contractor who disclosed sensitive government documents to journalists to uncover what he believed were unethical activities. Which of the following terms best describe Snowden's activities? (Choose two.)",
        choices: ["Insider", "State actor", "Hacktivist", "APT", "Organized crime"],
        answer: "A, C",
        explanation: "As a government contractor, Snowden had authorized access to classified information and exploited this access to make an unauthorized disclosure of that information. This clearly makes him fit into the category of an insider. He did so with political motivations, making him fit the category of hacktivist as well."
      },
      {
        question: "Renee is a cybersecurity hobbyist. She receives an email about a new web-based grading system being used by her son's school and she visits the site. She notices that the URL for the site looks like this: www.myschool.edu/grades.php&studentID=1023425. She realizes that 1023425 is her son's student ID number and she then attempts to access the following similar URLs: www.myschool.edu/grades.php&studentID=1023423, www.myschool.edu/grades.php&studentID=1023424, www.myschool.edu/grades.php&studentID=1023426, www.myschool.edu/grades.php&studentID=1023427. When she does so, she accesses the records of other students. She closes the records and immediately informs the school principal of the vulnerability. What term best describes Renee's work?",
        choices: ["Authorized hacking", "Unknown hacking", "Semi-authorized hacking", "Unauthorized hacking"],
        answer: "C",
        explanation: "Renee was not authorized to perform this security testing, so her work does not fit into the category of white-hat hacking, or authorized hacking. However, she also does not have malicious intent, so her work cannot be categorized as an unauthorized, or black-hat attack. Instead, it fits somewhere in between the two extremes and would best be described as semi-authorized, or gray-hat hacking."
      },
      {
        question: "Ryan wants to prevent logic bombs created by insider threats from impacting his organization. What technique will most effectively limit the likelihood of logic bombs being put in place?",
        choices: ["Deploying antivirus software", "Using a code review process", "Deploying endpoint detection and response (EDR) software", "Disabling autorun for USB drives"],
        answer: "B",
        explanation: "Logic bombs are embedded in code, so Ryan's organization would get the most benefit from a code review process for any code that goes into production. Antivirus and EDR are unlikely to detect logic bombs created by staff in Ryan's organization."
      },
      {
        question: "Yasmine believes that her organization may be dealing with an advanced rootkit and wants to write IoC definitions for it. Which of the following is not likely to be a useful IoC for a rootkit?",
        choices: ["File hashes", "Command and control domains", "Pop-ups demanding a ransom", "Behavior-based identifiers"],
        answer: "C",
        explanation: "Rootkits are intended to be stealthy, and a pop-up demanding ransom works against that purpose. File hashes, command and control details, and behavior-based identifiers are all useful IoCs likely to be relevant to a rootkit."
      },
      {
        question: "Nathan works at a school and notices that one of his staff appears to have logged in and changed grades for a single student to higher grades, even in classes that staff member is not responsible for. When asked, the staff member says that they did not perform the action. Which of the following is the most likely way that a student could have gotten access to the staff member's password?",
        choices: ["A keylogger", "A rootkit", "Spyware", "A logic bomb"],
        answer: "A",
        explanation: "Nathan should check the staff member's computer for a keylogger, which would have captured their username and password. A student could have then used the staff member's credentials to make the changes described. A rootkit would be used to retain access, spyware gathers a variety of data but is not specifically aimed at capturing keystrokes like this, and logic bombs have specific events or triggers that cause them to take action."
      },
      {
        question: "Amanda notices traffic between her systems and a known malicious host on TCP port 6667. What type of traffic is she most likely detecting?",
        choices: ["Command and control", "Spyware", "A worm", "A hijacked web browser"],
        answer: "A",
        explanation: "Amanda has most likely discovered a botnet's command and control channel, and the system or systems she is monitoring are probably using IRC as the command and control channel. Spyware is likely to simply send data to a central server via HTTP/HTTPS, worms spread by attacking vulnerable services, and a hijacked web browser would probably operate on common HTTP or HTTPS ports (80/443)."
      },
      {
        question: "Mike discovers that attackers have left software that allows them to have remote access to systems on a computer in his company's network. How should he describe or classify this malware?",
        choices: ["A worm", "Crypto malware", "A trojan", "A backdoor"],
        answer: "D",
        explanation: "Remote access to a system is typically provided by a backdoor. Backdoors may also appear in firmware or even in hardware. None of the other items listed provide remote access by default, although they may have a backdoor as part of a more capable malware package."
      },
      {
        question: "What is the primary impact of bloatware?",
        choices: ["Consuming resources", "Logging keystrokes", "Providing information about users and devices to third parties", "Allowing unauthorized remote access"],
        answer: "A",
        explanation: "Bloatware is typically not a significant security threat, but it consumes resources like disk space, CPU, and memory. Unfortunately, some bloatware can be vulnerable and may not get regularly patched, meaning it's both useless and a potential risk!"
      },
      {
        question: "What type of malware is used to gather information about a user's browsing habits and system?",
        choices: ["A Trojan", "Bloatware", "Spyware", "A rootkit"],
        answer: "C",
        explanation: "Spyware is specifically designed to gather information about users and systems and to send that data back to a central collector. Trojans pretend to be useful software and include malicious components, bloatware is preinstalled software that isn't needed, and rootkits are used to conceal malicious software and retain a foothold on compromised systems."
      },
      {
        question: "Matt uploads a malware sample to a third-party malware scanning site that uses multiple antimalware and antivirus engines to scan the sample. He receives multiple different answers for what the malware package is. What has occurred?",
        choices: ["The package contains more than one piece of malware.", "The service is misconfigured.", "The malware is polymorphic and changed while being tested.", "Different vendors use different names for malware packages."],
        answer: "D",
        explanation: "One of the challenges security practitioners can face when attempting to identify malware is that different antivirus and antimalware vendors will name malware packages and families differently. This means that Matt may need to look at different names to figure out what he is dealing with."
      },
      {
        question: "Nancy is concerned that there is a software keylogger on the system she's investigating. What best describes data that may have been stolen?",
        choices: ["All files on the system", "All keyboard input", "All files the user accessed while the keylogger was active", "Keyboard and other input from the user"],
        answer: "D",
        explanation: "While keyloggers often focus on keyboard input, other types of input may also be captured, meaning Nancy should worry about any user input that occurred while the keylogger was installed. Keyloggers typically do not target files on systems, although if Nancy finds a keylogger, she may want to check for other malware packages with additional capabilities."
      },
      {
        question: "A system in Elaine's company has suddenly displayed a message demanding payment in Bitcoin and claiming that the data from the system has been encrypted. What type of malware has Elaine likely encountered?",
        choices: ["Worms", "A virus", "Ransomware", "Rootkit"],
        answer: "C",
        explanation: "Ransomware demands payment to be made while typically using encryption to make data inaccessible. Worms, viruses, and rootkits are not defined by behavior like this."
      },
      {
        question: "Rick believes that a system he is responsible for has been compromised with malware that uses a rootkit to obtain and retain access to the system. When he runs an antimalware tool's scanner, the system doesn't show any malware. If he has other data that indicates the system is infected, what should his next step be if he wants to determine what malware may be on the system?",
        choices: ["Rerun the antimalware scan.", "Mount the drive on another system and scan it that way.", "Disable the system's antivirus because it may be causing a false negative.", "The system is not infected and he should move on."],
        answer: "B",
        explanation: "Rootkits are designed to hide from antimalware scanners and can often defeat locally run scans. Mounting the drive in another system in read-only mode or booting from a USB drive and scanning using a trusted, known good operating system can be an effective way to determine what malware is on a potentially infected system."
      },
      {
        question: "A recently terminated developer from Jaya's organization has contacted the organization claiming that they left code in an application that they wrote that will delete files and bring the application down if they are not employed by the company. What type of malware is this?",
        choices: ["Ransomware", "Extortionware", "A logic bomb", "A Trojan"],
        answer: "C",
        explanation: "Jaya's former employee is describing a logic bomb, malicious code that will cause harm when a trigger or specific action occurs. In this case, the former employee is claiming that the trigger is them not being employed at the company. Jaya will need to assess all of the code that the employee wrote to determine if a logic bomb exists. Ransomware is a type of malicious software that typically uses encryption to extort a ransom. Extortionware is not a commonly used term. Trojans appear to be useful or desirable software but contain malicious code."
      },
      {
        question: "Selah wants to ensure that malware is completely removed from a system. What should she do to ensure this?",
        choices: ["Run multiple antimalware tools and use them to remove all detections.", "Wipe the drive and reinstall from known good media.", "Use the delete setting in her antimalware software rather than the quarantine setting.", "There is no way to ensure the system is safe and it should be destroyed."],
        answer: "B",
        explanation: "In most malware infection scenarios, wiping the drive and reinstalling from known good media is the best option available. If the malware has tools that can infect the system BIOS/UEFI, even this may not be sufficient, but BIOS/UEFI resident malware is relatively uncommon. Multiple antivirus and antimalware tools, even if they are set to delete malware, may still fail against unknown or advanced malware packages. Destroying systems is uncommon, expensive, and unlikely to be acceptable to most organizations as a means of dealing with a malware infection."
      },
      {
        question: "What is the key difference between a worm and a virus?",
        choices: ["What operating system they run on", "How they spread", "What their potential impact is", "The number of infections"],
        answer: "B",
        explanation: "The key difference between worms and viruses is how they spread. Worms spread themselves, whereas viruses rely on human interaction."
      },
      {
        question: "Ben wants to analyze Python code that he believes may be malicious code written by an employee of his organization. What can he do to determine if the code is malicious?",
        choices: ["Run a decompiler against it to allow him to read the code", "Open the file using a text editor to review the code", "Test the code using an antivirus tool", "Submit the Python code to a malware testing website"],
        answer: "B",
        explanation: "Python is an interpreted rather than a compiled language, so Ben doesn't need to use a decompiler. Instead, his best bet is to open the file and review the code to see what it does. Since it was written by an employee, it is unlikely that it will match an existing known malicious package, which means antivirus and antimalware tools and sites will be useless."
      },
      {
        question: "Which of the following defenses is most likely to prevent Trojan installation?",
        choices: ["Installing patches for known vulnerabilities", "Preventing downloads from application stores", "Preventing the use of USB drives", "Disabling autorun from USB drives"],
        answer: "B",
        explanation: "Trojans are often found in application stores where they appear to be innocuous but desirable applications or are listed in confusingly similar ways to legitimate applications. Many organizations choose to lock down the ability to acquire applications from app stores to prevent this type of issue. Since Trojans do not self-spread and rely on user action, patching typically won't prevent them. While users may try to transfer files via USB, this isn't the most common means for modern Trojans to spread."
      },
      {
        question: "Jason's security team reports that a recent WordPress vulnerability seems to have been exploited by malware and that their organization's entire WordPress service cluster has been infected. What type of malware is most likely involved if a vulnerability in the software was exploited over the network?",
        choices: ["A logic bomb", "A Trojan", "A worm", "A rootkit"],
        answer: "C",
        explanation: "Worms often spread via networks, taking advantage of vulnerabilities to install themselves on targeted systems and then to propagate further. Trojans require human interaction to install software that appears desirable. Logic bombs are embedded in code and perform actions when triggers like a date or event occur. Rootkits are used to hide malware and to conceal attacker's actions."
      },
      {
        question: "Hui's organization recently purchased new Windows computers from an office supply store. The systems have a number of unwanted programs on them that load at startup that were installed by the manufacturer. What type of software is this?",
        choices: ["Viruses", "Trojans", "Spyware", "Bloatware"],
        answer: "D",
        explanation: "Unwanted, typically preinstalled programs are known as bloatware. They take up space and resources without providing value, and many organizations either uninstall them or install clean operating system images to avoid them. There is no indication of malicious activity in the question, so these are most likely not viruses, Trojans, or spyware."
      },
      {
        question: "What type of malware connects to a command and control system, allowing attackers to manage, control, and update it remotely?",
        choices: ["A bot", "A drone", "A vampire", "A worm"],
        answer: "A",
        explanation: "Bots connect to command and control (C&C) systems, allowing them to be updated, controlled, and managed remotely. Worms spread via vulnerabilities, and drones and vampires aren't common terms for malware."
      },
      {
        question: "Randy believes that a system that he is responsible for was infected after a user picked up a USB drive and plugged it in. The user claims that they only opened one file on the drive to see who might own it. What type of malware is most likely involved?",
        choices: ["A virus", "A worm", "A trojan", "A spyware tool"],
        answer: "A",
        explanation: "Randy knows that viruses spread through user interaction with files on thumb drives. A worm would spread itself, a Trojan would look like a useful or desirable file, and there is no indication of spyware in the question."
      },    
      {
        question: "Joseph receives an email notifying him that he needs to change his password due to a recent account issue. He notices that the email links him to a website using the domain amaz0n.com. What type of attack should he describe this as?",
        choices: ["Typosquatting", "Phishing", "Smishing", "A watering hole attack"],
        answer: "B",
        explanation: "This email is an attempt to get account information and is a phishing email. Joseph did not enter the URL himself, which is the behavior that a typosquatter relies on. A smishing attack relies on SMS, and a watering hole attack uses a frequently visited website."
      },
      {
        question: "When you combine phishing with voicemail, it is known as:",
        choices: ["Whaling", "Spoofing", "Spooning", "Vishing"],
        answer: "D",
        explanation: "Vishing is a form of phishing done via voice phone calls or voicemail. Whaling focuses on targeting important targets for phishing attacks, whereas spoofing is a general term that means faking things. Spooning is not a technical term used for security practices."
      },
      {
        question: "While reviewing her logs, Michele notices that a remote system has attempted to log into her server via SSH using the username admin and a variety of passwords like “password” and “ninja.” What type of attack has Michele noticed?",
        choices: ["A brute-force attack", "Shoulder surfing", "An on-path attack", "Pretexting"],
        answer: "A",
        explanation: "Michele has discovered a brute-force attack, which relies on trying a large number of passwords, often combined with a list of usernames to try. Shoulder surfing attacks involve an attacker watching as a user enters information like a password or credit card data. On-path attacks intercept data sent via a network, and pretexting is a social engineering attack that relies on a believable reason for attackers to need a victim to take action."
      },
      {
        question: "Joanna wants to detect password spraying attacks. What type of rule should she deploy through her security systems?",
        choices: [
          "Match attempts to log into many systems with the same username and password.",
          "Match multiple attempts to log into the same user account using different passwords.",
          "Match repeated use of the same password during failed login attempts for multiple usernames.",
          "Match all attempts to use passwords with slight changes for the same account."
        ],
        answer: "C",
        explanation: "Password spraying involves the use of the same password to attempt to log into multiple accounts. Joanna should search for uses of the same password for different accounts."
      },
      {
        question: "One of the staff at Susan's organization has reported that a critical vendor has contacted them about an unpaid invoice. After Susan investigates, she discovers that the invoice was sent from an email account that was not typically a contact and that the invoice requested payment to a PayPal account. What type of social engineering attack has Susan most likely discovered?",
        choices: ["Smishing", "Business email compromise", "Disinformation", "Typosquatting"],
        answer: "B",
        explanation: "Susan has most likely discovered a business email compromise and should reach out to the impacted organization to inform them of the potentially compromised account. Smishing would occur via SMS, there is nothing in the question to indicate a disinformation campaign was part of this, and there is no URL mentioned and thus typosquatting can be dismissed as well."
      },
      {
        question: "Selah infects the ads on a website that users from her target company frequently visit with malware as part of her penetration test. What technique has she used?",
        choices: ["A watering hole attack", "Vishing", "Whaling", "Typosquatting"],
        answer: "A",
        explanation: "Watering hole attacks rely on compromising or infecting a website that targeted users frequently visit, much like animals will visit a common watering hole. Vishing is phishing via voice, whaling is a targeted phishing attack against senior or important staff, and typosquatting registers similar URLs that are likely to be inadvertently entered in order to harvest clicks or conduct malicious activity."
      },
      {
        question: "Ben wants to determine if brute-force password attacks are being used against his company. What log information is least likely to be useful when working to detect brute-force attacks?",
        choices: ["Source IP address or hostname", "Failed login logs", "The password that was used for each attempt", "The geographic location of system being logged into"],
        answer: "D",
        explanation: "The source IP or hostname; the failed login logs with time, date, username, and other information; and the password that was used for each failed attempt would be useful for watching for brute-force attempts. Knowing where the system being logged into is located isn't useful when tracking brute-force attempts."
      },
      {
        question: "Melissa receives a call and the caller informs her a senior manager in her organization needs her to buy gift cards for an event that starts in an hour. The caller says that the senior leader forgot to get the cards, and that the event is critical to her organization. Melissa buys the cards and sends them to the Gmail address the caller says that the senior leader needs them sent to. What type of attack has Melissa fallen for?",
        choices: ["Phishing", "Pretexting", "Business email compromise", "Carding"],
        answer: "B",
        explanation: "The caller is using pretexting, providing Melissa with a story that relies on urgency and perceived authority to get her to take actions she might normally question. This social engineering attack is not a phishing attack aimed at gathering information or credentials, it does not involve business email accounts being compromised, and carding is not a topic covered in the Security+ exam outline."
      },
      {
        question: "Alaina wants to determine if a password spraying attack was used against her organization. Which of the following indicators would be most useful as part of her investigation?",
        choices: ["The time the login attempts happened", "The passwords used for failed attempts", "The source IP address of the attempts", "The number of failed attempts for each user"],
        answer: "B",
        explanation: "Password spraying attempts try to use a single common password for many user accounts. Determining if a single password is being used over and over can help catch basic password spraying attempts. The time, source IP, or number of failed attempts do not indicate password spraying."
      },
      {
        question: "Which of the following human vectors is primarily associated with nation-state actors?",
        choices: ["Misinformation campaigns", "Watering hole attacks", "Business email compromise", "Password spraying"],
        answer: "A",
        explanation: "Misinformation and disinformation campaigns are primarily associated with nation-state actors, but are increasingly used by other organizations and even individuals as well. Watering hole attacks, business email compromise, and password spraying are broadly used attacks."
      },
      {
        question: "Nicole accidentally types www.smazon.com into her browser and discovers that she is directed to a different site loaded with ads and pop-ups. Which of the following is the most accurate description of the attack she has experienced?",
        choices: ["DNS hijacking", "Pharming", "Typosquatting", "Hosts file compromise"],
        answer: "C",
        explanation: "Typosquatting uses misspellings and common typos of websites to redirect traffic for profit or malicious reasons. DNS hijacking and hosts file modifications both attempt to redirect traffic to actual URLs or hostnames to different destinations, and pharming does redirect legitimate traffic to fake sites, but typosquatting is the more specific answer."
      },
      {
        question: "Devon is a penetration tester and sets up malicious tools on his target organization's primary internal website. What type of attack is he conducting?",
        choices: ["A misinformation campaign", "A watering hole attack", "A typosquatting attack", "A disinformation campaign"],
        answer: "B",
        explanation: "Devon is conducting a watering hole attack that leverages a frequently visited site to deploy malware. There is no description of misinformation or disinformation in the question, and there is not a typo described that would lead to a typosquatting attack being successful."
      },
      {
        question: "Phishing emails sent pretending to be from a company that recipients are familiar with and likely to respond to is what type of attack?",
        choices: ["Phishing", "Pharming", "Brand impersonation", "Pretexting"],
        answer: "C",
        explanation: "Brand impersonation attacks are designed to appear to be from a company that recipients are likely to be familiar with, and thus are more likely to elicit a response. While these are a type of phishing, the more specific answer of brand impersonation is the best answer."
      },
      {
        question: "When a caller was recently directed to Amanda, who is a junior IT employee at her company, the caller informed her that they were the head of IT for her organization and that she needed to immediately disable the organization's firewall. After Amanda made the change, she discovered that the caller was not the head of IT, and that they were actually a penetration tester hired by her company. What social engineering attack best describes this?",
        choices: ["Smishing", "Pretexting", "Impersonation", "Vishing"],
        answer: "C",
        explanation: "This is an example of an impersonation attack. The pentester impersonated the head of IT in order to achieve their goals. Smishing is phishing via SMS, vishing is phishing via voice or voicemail, and pretexting provides a reason that the target should perform an action. Here the attack relied on the authority that Amanda believed the caller had."
      },
      {
        question: "Fred is concerned about text message–based attacks. Which of the following attacks relies on text messages as its primary focus?",
        choices: ["Impersonation", "Watering hole attacks", "Smishing", "Business email compromise"],
        answer: "C",
        explanation: "Smishing attacks are SMS-based. Impersonation attacks could use texts but don't specifically rely on them. Watering hole attacks use frequently visited websites, whereas business email compromise attacks focus on gaining access to business email accounts to use in follow-up attacks."
      },
      {
        question: "Sharif notices that his authentication logs have many different usernames showing failed logins with the same password. What type of attack has he discovered?",
        choices: ["Credential harvesting", "Impersonation", "BEC", "Spraying"],
        answer: "D",
        explanation: "Sharif has discovered a spraying attack that uses the same password—often a default or common password—with many usernames. Credential harvesting is the process of gathering credentials like usernames and passwords. Impersonation is a social engineering technique used when an attacker pretends to be someone else. BEC, or business email compromise, involves attackers posing as a trusted individual and asking for actions to be performed."
      },
      {
        question: "Naomi receives a report of smishing. What type of attack should she be looking for?",
        choices: ["Compressed files in phishing", "Text message–based phishing", "Voicemail-based phishing", "Server-based phishing"],
        answer: "B",
        explanation: "Smishing is a type of phishing that occurs via text (SMS) message."
      },
      {
        question: "Jack's organization wants to prevent typosquatting. What option should he select to address this issue?",
        choices: ["Copyright the domain name", "Purchase the most common typos for his organization's domain", "Trademark the domain name", "Disable typo resolution for the domain"],
        answer: "B",
        explanation: "While it's nearly impossible to prevent typosquatting, purchasing and registering the most common typos (typodomains) related to your organization's domain and redirecting them to your real domain is the most effective option available."
      },
      {
        question: "Gwyne's company has been contacted by customers asking about a new social media account operating under the company's brand. The social media account is advertising cryptocurrency, which Gwyne's organization does not sell or work with. What type of attack best describes what Gwyne's organization has encountered?",
        choices: ["Impersonation", "Brand impersonation", "Mis-branding", "Crypto-phishing"],
        answer: "B",
        explanation: "Using an organization's brand in this way is an example of brand impersonation. While this is also an impersonation attack, the more specific description is the best answer here."
      },
      {
        question: "Nation-state-driven social media campaigns about the trustworthiness of the U.S. election in 2016 are an example of what type of social engineering?",
        choices: ["Smishing", "Pretexting", "Disinformation", "Spraying"],
        answer: "C",
        explanation: "Disinformation campaigns are used to shift public opinion or to accomplish other goals. They are not limited to nation-state actors but are an increasingly heavily used social engineering tactic at a broad scale."
      },
      {
        question: "Which one of the following security assessment techniques assumes that an organization has already been compromised and searches for evidence of that compromise?",
        choices: ["Vulnerability scanning", "Penetration testing", "Threat hunting", "War driving"],
        answer: "C",
        explanation: "Threat hunting is an assessment technique that makes an assumption of compromise and then searches the organization for indicators of compromise that confirm the assumption. Vulnerability scanning, penetration testing, and war driving are all assessment techniques that probe for vulnerabilities but do not assume that a compromise has already taken place."
      },
      {
        question: "Renee is configuring her vulnerability management solution to perform credentialed scans of servers on her network. What type of account should she provide to the scanner?",
        choices: ["Domain administrator", "Local administrator", "Root", "Read-only"],
        answer: "D",
        explanation: "Credentialed scans only require read-only access to target servers. Renee should follow the principle of least privilege and limit the access available to the scanner."
      },
      {
        question: "Ryan is planning to conduct a vulnerability scan of a business-critical system using dangerous plug-ins. What would be the best approach for the initial scan?",
        choices: ["Run the scan against production systems to achieve the most realistic results possible.", "Run the scan during business hours.", "Run the scan in a test environment.", "Do not run the scan to avoid disrupting the business."],
        answer: "C",
        explanation: "Ryan should first run his scan against a test environment to identify likely vulnerabilities and assess whether the scan itself might disrupt business activities."
      },
      {
        question: "Which one of the following values for the CVSS attack complexity metric would indicate that the specified attack is simplest to exploit?",
        choices: ["High", "Medium", "Low", "Severe"],
        answer: "C",
        explanation: "An attack complexity of “low” indicates that exploiting the vulnerability does not require any specialized conditions."
      },
      {
        question: "Tara recently analyzed the results of a vulnerability scan report and found that a vulnerability reported by the scanner did not exist because the system was actually patched as specified. What type of error occurred?",
        choices: ["False positive", "False negative", "True positive", "True negative"],
        answer: "A",
        explanation: "A false positive error occurs when the vulnerability scanner reports a vulnerability that does not actually exist."
      },
      {
        question: "Brian ran a penetration test against a school's grading system and discovered a flaw that would allow students to alter their grades by exploiting a SQL injection vulnerability. What type of control should he recommend to the school's cybersecurity team to prevent students from engaging in this type of activity?",
        choices: ["Confidentiality", "Integrity", "Alteration", "Availability"],
        answer: "B",
        explanation: "By allowing students to change their own grades, this vulnerability provides a pathway to unauthorized alteration of information. Brian should recommend that the school deploy integrity controls that prevent unauthorized modifications."
      },
      {
        question: "Which one of the following security assessment tools is least likely to be used during the reconnaissance phase of a penetration test?",
        choices: ["Nmap", "Nessus", "Metasploit", "Nslookup"],
        answer: "C",
        explanation: "Metasploit is an exploitation framework used to execute and attack and would be better suited for the Attacking and Exploiting phase of a penetration test. The other tools are used in reconnaissance."
      },
      {
        question: "During a vulnerability scan, Brian discovered that a system on his network contained this vulnerability: What security control, if deployed, would likely have addressed this issue?",
        choices: ["Patch management", "File integrity monitoring", "Intrusion detection", "Threat hunting"],
        answer: "A",
        explanation: "This vulnerability is corrected by a patch that was released by Microsoft in 2017. A strong patch management program would have identified and remediated the missing patch."
      },
      {
        question: "Which one of the following tools is most likely to detect an XSS vulnerability?",
        choices: ["Static application test", "Web application vulnerability scanner", "Intrusion detection system", "Network vulnerability scanner"],
        answer: "B",
        explanation: "A web application vulnerability scanner is the most likely to detect XSS vulnerabilities because it is specifically designed to test web applications."
      },
      {
        question: "During a penetration test, Patrick deploys a toolkit on a compromised system and uses it to gain access to other systems on the same network. What term best describes this activity?",
        choices: ["Lateral movement", "Privilege escalation", "Footprinting", "OSINT"],
        answer: "A",
        explanation: "Moving from one compromised system to other systems on the same network is known as lateral movement."
      },
      {
        question: "Zian is a cybersecurity leader who is coordinating the activities of a security audit. The audit is being done to validate the organization's financial statements to investors and involves a review of cybersecurity controls. What term best describes this audit?",
        choices: ["External audit", "Penetration test", "Internal audit", "Informal audit"],
        answer: "A",
        explanation: "Audits performed to validate an organization's financial statements are very formal audits that are performed by independent third-party auditors. This makes them external audits."
      },
      {
        question: "Which one of the following assessment techniques is designed to solicit participation from external security experts and reward them for discovering vulnerabilities?",
        choices: ["Threat hunting", "Penetration testing", "Bug bounty", "Vulnerability scanning"],
        answer: "C",
        explanation: "Bug bounty programs are designed to allow external security experts to test systems and uncover previously unknown vulnerabilities. They offer successful testers financial rewards to incentivize participation."
      },
      {
        question: "Kyle is conducting a penetration test. After gaining access to an organization's database server, he installs a backdoor on the server to grant himself access in the future. What term best describes this action?",
        choices: ["Privilege escalation", "Lateral movement", "Maneuver", "Persistence"],
        answer: "D",
        explanation: "Backdoors are a persistence tool, designed to make sure that the attacker's access persists after the original vulnerability is remediated."
      },
      {
        question: "Which one of the following techniques would be considered passive reconnaissance?",
        choices: ["Port scans", "Vulnerability scans", "WHOIS lookups", "Footprinting"],
        answer: "C",
        explanation: "WHOIS lookups use external registries and are an example of open source intelligence (OSINT), which is a passive reconnaissance technique."
      },
      {
        question: "Which element of the SCAP framework can be used to consistently describe vulnerabilities?",
        choices: ["CPE", "CVE", "CVSS", "CCE"],
        answer: "B",
        explanation: "Common Vulnerabilities and Exposures (CVE) provides a standard nomenclature for describing security-related software flaws."
      },
      {
        question: "Bruce is conducting a penetration test for a client. The client provided him with full details of their systems in advance. What type of test is Bruce conducting?",
        choices: ["Partially known environment test", "Detailed environment test", "Known environment test", "Unknown environment test"],
        answer: "C",
        explanation: "Known environment tests are performed with full knowledge of the underlying technology, configurations, and settings that make up the target."
      },
      {
        question: "Lila is working on a penetration testing team and she is unsure whether she is allowed to conduct social engineering as part of the test. What document should she consult to find this information?",
        choices: ["Contract", "Statement of work", "Rules of engagement", "Lessons learned report"],
        answer: "C",
        explanation: "The rules of engagement provide technical details on the parameters of the test, including what is and isn't allowed."
      },
      {
        question: "Grace would like to determine the operating system running on a system that she is targeting in a penetration test. Which one of the following techniques will most directly provide her with this information?",
        choices: ["Port scanning", "Footprinting", "Vulnerability scanning", "Packet capture"],
        answer: "B",
        explanation: "Footprinting is a technique specifically designed to elicit information such as the operating system in use."
      },
      {
        question: "Kevin recently identified a new security vulnerability and computed its CVSS base score as 6.5. Which risk category would this vulnerability fall into?",
        choices: ["Low", "Medium", "High", "Critical"],
        answer: "B",
        explanation: "Vulnerabilities with CVSS base scores between 4.0 and 6.9 fit into the medium risk category."
      },
      {
        question: "Which one of the CVSS metrics would contain information about the type of account access that an attacker must have to execute an attack?",
        choices: ["AV", "C", "PR", "AC"],
        answer: "C",
        explanation: "The privileges required (PR) metric indicates the type of system access that an attacker must have to execute the attack."
      },
      {
        question: "Adam is conducting software testing by reviewing the source code of the application. What type of code testing is Adam conducting?",
        choices: ["Mutation testing", "Static code analysis", "Dynamic code analysis", "Fuzzing"],
        answer: "B",
        explanation: "Adam is conducting static code analysis by reviewing the source code. Dynamic code analysis requires running the program, and both mutation testing and fuzzing are types of dynamic analysis."
      },
      {
        question: "Charles is worried about users conducting SQL injection attacks. Which of the following solutions will best address his concerns?",
        choices: ["Using secure session management", "Enabling logging on the database", "Performing user input validation", "Implementing TLS"],
        answer: "C",
        explanation: "Charles should perform user input validation to strip out any SQL code or other unwanted input. Input validation helps prevent SQL injection attacks."
      },
      {
        question: "Precompiled SQL statements that only require variables to be input are an example of what type of application security control?",
        choices: ["Parameterized queries", "Encoding data", "Input validation", "Appropriate access controls"],
        answer: "A",
        explanation: "A parameterized query uses a prebuilt SQL statement to prevent SQL-based attacks. Variables from the application are fed to the query, rather than building a custom query dynamically."
      },
      {
        question: "During a web application test, Ben discovers that the application shows SQL code as part of an error provided to application users. What should he note in his report?",
        choices: ["Improper error handling", "Code exposure", "SQL injection", "A default configuration issue"],
        answer: "A",
        explanation: "Improper error handling often exposes data to users and attackers that should not be exposed, like SQL statements. This can aid further attacks."
      },
      {
        question: "The application that Scott is writing has a flaw that occurs when two operations are attempted at the same time, resulting in unexpected results when the two actions do not occur in the expected order. What type of flaw does the application have?",
        choices: ["Dereferencing", "A race condition", "An insecure function", "Improper error handling"],
        answer: "B",
        explanation: "The application has a race condition, which occurs when multiple operations cause undesirable results due to their order of completion."
      },
      {
        question: "Every time Susan checks code into her organization's code repository, it is tested and validated, and then if accepted, it is immediately put into production. What is the term for this?",
        choices: ["Continuous integration", "Continuous delivery", "A security nightmare", "Agile development"],
        answer: "B",
        explanation: "This is continuous delivery, where code is both continually integrated and deployed into production environments after validation."
      },
      {
        question: "Tim is working on a change to a web application used by his organization to fix a known bug. What environment should he be working in?",
        choices: ["Test", "Development", "Staging", "Production"],
        answer: "B",
        explanation: "Developers should work in the development environment when writing or modifying code. Test and staging come after development, and production is the live system."
      },
      {
        question: "Ricky is concerned that developers in his organization make use of third-party code in their applications, which may introduce unknown vulnerabilities. He is concerned about the risk of the organization running code that it is not aware it is using. Which one of the following activities would best address this risk?",
        choices: ["Web application firewalls", "Package monitoring", "Static analysis", "Dynamic analysis"],
        answer: "B",
        explanation: "Package monitoring inventories and tracks third-party libraries used in applications, helping detect unexpected or vulnerable packages."
      },
      {
        question: "Which one of the following is not an advantage of automation in cybersecurity operations?",
        choices: ["Enforcing baselines", "Technical debt", "Employee retention", "Standardizing infrastructure configurations"],
        answer: "B",
        explanation: "Technical debt is a drawback of automation, not an advantage. The others are benefits of automation in security operations."
      },
      {
        question: "Chris is creating a script that will automatically screen any user requests and flag those that exceed normal thresholds for manual review. What term best describes this automation use case?",
        choices: ["User provisioning", "Guard rails", "Ticket creation", "Escalation"],
        answer: "B",
        explanation: "This is an example of a guard rails automation use case—scripts that detect abnormal behavior and prevent undesired actions."
      },
      {
        question: "Which one of the following is not a common drawback of automating cybersecurity operations?",
        choices: ["Reducing employee satisfaction", "Creating single points of failure", "Costs", "Complexity"],
        answer: "A",
        explanation: "Automation typically improves employee retention. Drawbacks include cost, complexity, technical debt, and introducing single points of failure."
      },
      {
        question: "Frank is investigating a security incident where the attacker entered a very long string into an input field, which was followed by a system command. What type of attack likely took place?",
        choices: ["Cross-site request forgery", "Server-side request forgery", "Command injection", "Buffer overflow"],
        answer: "D",
        explanation: "Buffer overflow attacks occur when an attacker writes more data into a buffer than it can hold, potentially executing malicious code."
      },
      {
        question: "What type of attack places an attacker in the position to eavesdrop on communications between a user and a web server?",
        choices: ["On-path attack", "Session hijacking", "Buffer overflow", "Meet-in-the-middle"],
        answer: "A",
        explanation: "In an on-path (man-in-the-middle) attack, the attacker intercepts communications between two parties."
      },
      {
        question: "Tom is a software developer who creates code for sale to the public. He would like to assure his users that the code they receive actually came from him. What technique can he use to best provide this assurance?",
        choices: ["Code signing", "Code endorsement", "Code encryption", "Code obfuscation"],
        answer: "A",
        explanation: "Code signing verifies the authenticity and integrity of code by using digital signatures. It assures users the code is from the stated source."
      },
      {
        question: "Chris is reviewing evidence of a cross-site scripting attack where the attacker embedded JavaScript in a URL that a user clicked. The web page then sent the JavaScript to the user in the displayed page. What term best describes this attack?",
        choices: ["Reflected XSS", "Stored XSS", "Persistent XSS", "DOM-based XSS"],
        answer: "A",
        explanation: "This is a reflected XSS attack, where malicious code is sent as part of the request and reflected back in the response."
      },
      {
        question: "Joe checks his web server logs and sees that someone sent the following query string to an application running on the server: www.mycompany.com/servicestatus.php?serviceID=892&serviceID=892’%20;DROP%20TABLE%20Services;-- What type of attack was most likely attempted?",
        choices: ["Cross-site scripting", "Session hijacking", "Parameter pollution", "On-path"],
        answer: "C",
        explanation: "This is a parameter pollution attack, where multiple values for the same parameter are submitted to bypass filters or trigger unexpected behavior."
      },
      {
        question: "Upon further inspection, Joe finds a series of thousands of requests to the same URL coming from a single IP address. What type of vulnerability was the attacker likely trying to exploit?",
        choices: ["Insecure direct object reference", "File upload", "Unvalidated redirect", "Session hijacking"],
        answer: "A",
        explanation: "The incrementing values in the serviceID suggest an attempt to exploit insecure direct object reference vulnerabilities."
      },
      {
        question: "Joe's adventures in web server log analysis are not yet complete. As he continues to review the logs, he finds the request: www.mycompany.com/../../../etc/passwd What type of attack was most likely attempted?",
        choices: ["SQL injection", "Session hijacking", "Directory traversal", "File upload"],
        answer: "C",
        explanation: "This is a directory traversal attack, attempting to access files outside the web root, such as /etc/passwd on Unix systems."
      },
      {
        question: "Wendy is a penetration tester who wishes to engage in a session hijacking attack. What information is crucial for Wendy to obtain if her attack will be successful?",
        choices: ["Session ticket", "Session cookie", "Username", "User password"],
        answer: "B",
        explanation: "Session hijacking requires capturing the session cookie, which can then be used to impersonate the legitimate user."
      },
      {
        question: "Joe is examining the logs for his web server and discovers that a user sent input to a web application that contained the string WAITFOR. What type of attack was the user likely attempting?",
        choices: ["Timing-based SQL injection", "HTML injection", "Cross-site scripting", "Content-based SQL injection"],
        answer: "A",
        explanation: "The use of WAITFOR is typical of a timing-based SQL injection attack, used to infer database behavior based on delayed responses."
      },
      {
        question: "Mike is sending David an encrypted message using a symmetric encryption algorithm. What key should he use to encrypt the message?",
        choices: ["Mike's public key", "Mike's private key", "David's public key", "Shared secret key"],
        answer: "D",
        explanation: "In symmetric encryption algorithms, both the sender and the receiver use a shared secret key to encrypt and decrypt the message, respectively."
      },
      {
        question: "Shahla recently discovered an attack where the attacker managed to force a network user to use weak encryption and was then able to decrypt that content. What term best describes this attack?",
        choices: ["Downgrade", "Collision", "Homomorphic encryption", "Birthday attack"],
        answer: "A",
        explanation: "Downgrade attacks try to remove or lower the strength of encryption to allow the decryption of sensitive information."
      },
      {
        question: "Norm is using full-disk encryption technology to protect the contents of laptops against theft. What goal of cryptography is he attempting to achieve?",
        choices: ["Integrity", "Non-repudiation", "Authentication", "Confidentiality"],
        answer: "D",
        explanation: "Norm's actions are designed to protect against the unauthorized disclosure of sensitive information. This is a clear example of protecting confidentiality."
      },
      {
        question: "Brian discovers that a user suspected of stealing sensitive information is posting many image files to a message board. What technique might the individual be using to hide sensitive information in those images?",
        choices: ["Steganography", "Homomorphic encryption", "Replay attack", "Birthday attack"],
        answer: "A",
        explanation: "Steganography is the art of using cryptographic techniques to embed secret messages within another file."
      },
      {
        question: "Which one of the following statements about cryptographic keys is incorrect?",
        choices: [
          "All cryptographic keys should be kept secret.",
          "Longer keys are better than shorter keys when the same algorithm is used.",
          "Asymmetric algorithms generally use longer keys than symmetric algorithms.",
          "Digital certificates are designed to share public keys."
        ],
        answer: "A",
        explanation: "The exception to the rule is public keys used in asymmetric cryptography. These keys should be freely shared."
      },
      {
        question: "What type of cipher operates on one character of text at a time?",
        choices: ["Block cipher", "Bit cipher", "Stream cipher", "Balanced cipher"],
        answer: "C",
        explanation: "Stream ciphers operate on one character or bit of a message at a time, unlike block ciphers which process whole blocks."
      },
      {
        question: "Vince is choosing a symmetric encryption algorithm for use in his organization. He would like to choose the strongest algorithm from these choices. What algorithm should he choose?",
        choices: ["DES", "3DES", "RSA", "AES"],
        answer: "D",
        explanation: "AES is the successor to 3DES and DES and is the best choice for a symmetric encryption algorithm."
      },
      {
        question: "Kevin is configuring a web server to use digital certificates. What technology can he use to allow clients to quickly verify the status of those certificates without contacting a remote server?",
        choices: ["CRL", "OCSP", "Certificate stapling", "Certificate pinning"],
        answer: "C",
        explanation: "Certificate stapling attaches a current OCSP response to the certificate to allow the client to validate the certificate without contacting the OCSP server."
      },
      {
        question: "Acme Widgets has 10 employees and they all need the ability to communicate with one another using a symmetric encryption system. If an 11th employee is added to the organization, how many new keys must be added to the system?",
        choices: ["1", "2", "10", "11"],
        answer: "C",
        explanation: "Each new employee needs a shared key with every existing employee. If 10 exist, 10 new keys are needed for the 11th employee."
      },
      {
        question: "Referring to the scenario in question 9, if Acme Widgets switched to an asymmetric encryption algorithm, how many keys would be required to add the 11th employee?",
        choices: ["1", "2", "10", "11"],
        answer: "B",
        explanation: "In asymmetric systems, each employee has a public and a private key. Adding a new user requires only their public and private key."
      },
      {
        question: "What type of digital certificate provides the greatest level of assurance that the certificate owner is who they claim to be?",
        choices: ["DV", "OV", "UV", "EV"],
        answer: "D",
        explanation: "Extended Validation (EV) certificates provide the highest level of assurance by requiring extensive identity verification."
      },
      {
        question: "Glenn recently obtained a wildcard certificate for *.mydomain.com. Which one of the following domains would not be covered by this certificate?",
        choices: ["mydomain.com", "core.mydomain.com", "dev.www.mydomain.com", "mail.mydomain.com"],
        answer: "C",
        explanation: "Wildcard certificates cover first-level subdomains only. dev.www.mydomain.com is a second-level subdomain and is not covered."
      },
      {
        question: "Which one of the following servers is almost always an offline CA in a large PKI deployment?",
        choices: ["Root CA", "Intermediate CA", "RA", "Internal CA"],
        answer: "A",
        explanation: "Root CAs are highly protected and not normally used for certificate issuance. They are usually kept offline."
      },
      {
        question: "Which one of the following certificate formats is closely associated with Windows binary certificate files?",
        choices: ["DER", "PEM", "PFX", "P7B"],
        answer: "C",
        explanation: "PFX format is associated with Windows systems that store certificates in binary format."
      },
      {
        question: "What type of security solution provides a hardware platform for the storage and management of encryption keys?",
        choices: ["HSM", "IPS", "SIEM", "SOAR"],
        answer: "A",
        explanation: "Hardware Security Modules (HSMs) provide secure hardware platforms to manage encryption keys."
      },
      {
        question: "What type of cryptographic attack attempts to force a user to reduce the level of encryption that they use to communicate with a remote server?",
        choices: ["Birthday", "Frequency", "Downgrade", "Collision"],
        answer: "C",
        explanation: "Downgrade attacks trick users or systems into using weaker encryption protocols that are easier to break."
      },
      {
        question: "David would like to send Mike a message using an asymmetric encryption algorithm. What key should he use to encrypt the message?",
        choices: ["David's public key", "David's private key", "Mike's public key", "Mike's private key"],
        answer: "C",
        explanation: "David should use Mike's public key to encrypt the message. Only Mike can decrypt it using his private key."
      },
      {
        question: "When Mike receives the message that David encrypted for him, what key should he use to decrypt the message?",
        choices: ["David's public key", "David's private key", "Mike's public key", "Mike's private key"],
        answer: "D",
        explanation: "Mike uses his private key to decrypt a message encrypted with his public key."
      },
      {
        question: "If David wishes to digitally sign the message that he is sending Mike, what key would he use to create the digital signature?",
        choices: ["David's public key", "David's private key", "Mike's public key", "Mike's private key"],
        answer: "B",
        explanation: "To create a digital signature, David encrypts the message digest with his own private key."
      },
      {
        question: "When Mike receives the digitally signed message from David, what key should he use to verify the digital signature?",
        choices: ["David's public key", "David's private key", "Mike's public key", "Mike's private key"],
        answer: "A",
        explanation: "To verify the digital signature, Mike uses David's public key to decrypt the signature and validate the message hash."
      },
      {
        question: "Angela has chosen to federate with other organizations to allow use of services that each organization provides. What role does Angela's organization play when they authenticate their users and assert that those users are valid to other members of the federation?",
        choices: ["Service provider", "Relying party", "Authentication provider", "Identity provider"],
        answer: "D",
        explanation: "Angela's organization is acting as an identity provider (IdP). Other members of the federation may act as service providers or relying parties."
      },
      {
        question: "Which of the following technologies is the least effective means of preventing shared accounts?",
        choices: ["Password complexity requirements", "Requiring biometric authentication", "Requiring one-time passwords via a token", "Requiring a one-time password via an application"],
        answer: "A",
        explanation: "Password complexity requirements do not prevent users from sharing passwords, even if they are complex."
      },
      {
        question: "What major difference is likely to exist between on-premises identity services and those used in a cloud-hosted environment?",
        choices: [
          "Account policy control will be set to the cloud provider's standards.",
          "The cloud service will provide account and identity management services.",
          "Multifactor authentication will not be supported by the cloud vendor.",
          "None of the above."
        ],
        answer: "B",
        explanation: "Most cloud services provide identity and authorization tools for their services, which is a key difference from on-premises services."
      },
      {
        question: "Amitoj wants to ensure that her organization's password policy does not allow users to reset their password multiple times until they can reuse their current password. What setting is used to prevent this?",
        choices: ["Complexity", "Length", "Expiration", "Age"],
        answer: "D",
        explanation: "Password age settings prevent users from changing their password repeatedly in order to circumvent password history settings."
      },
      {
        question: "Which type of multifactor authentication is considered the least secure?",
        choices: ["HOTP", "SMS", "TOTP", "Biometric"],
        answer: "B",
        explanation: "SMS messages can be intercepted or redirected, making them the least secure multifactor method listed."
      },
      {
        question: "Geeta has been issued a USB security key as part of her organization's multifactor implementation. What type of implementation is this?",
        choices: ["A hard token", "A biometric token", "A soft token", "An attestation token"],
        answer: "A",
        explanation: "A USB security key is a hard token—physical hardware used for authentication."
      },
      {
        question: "Michelle enables the Windows picture password feature to control logins for her laptop. Which type of attribute will it provide?",
        choices: ["Somewhere you are", "Something you know", "Something you are", "Someone you know"],
        answer: "B",
        explanation: "The picture password is something you know—it requires knowledge of specific gestures or image positions."
      },
      {
        question: "What purpose would Linux file permissions set to rw-r--r-- serve?",
        choices: [
          "To allow the owner to read and write the file, and for the owner's group and others to be able to read it",
          "To allow all users to read and write the file, and for the group and owner to be able to read it",
          "To allow system administrators to read and write the file, and for users and all others to be able to read it",
          "To prevent reading and writing for all users, and to prevent reading by groups and a specific user"
        ],
        answer: "A",
        explanation: "The owner has read/write, group has read, and others have read permissions."
      },
      {
        question: "Theresa wants to implement an access control scheme that sets permissions based on what the individual's job requires. Which of the following schemes is most suited to this type of implementation?",
        choices: ["ABAC", "DAC", "RBAC", "MAC"],
        answer: "C",
        explanation: "Role-Based Access Control (RBAC) grants permissions based on the user's job role, making it ideal for this scenario."
      },
      {
        question: "Which of the following biometric technologies is most broadly deployed due to its ease of use and acceptance from end users?",
        choices: ["Voice print recognition", "Gait recognition", "Retina scanners", "Fingerprint scanner"],
        answer: "D",
        explanation: "Fingerprint scanners are widely used in mobile devices and laptops due to their convenience and accuracy."
      },
      {
        question: "Adam wants to increase his organization's passwords resistance to attacks in the event that the password hash database is stolen by attackers. Which of the following password security settings has the largest impact on password cracking if his organization's current passwords are 8 characters long?",
        choices: ["Password complexity", "Password length", "Password reuse limitations", "Preventing the use of common words in passwords"],
        answer: "B",
        explanation: "Password length has the greatest effect on resisting brute-force and hash cracking attacks."
      },
      {
        question: "A PIN is an example of what type of factor?",
        choices: ["Something you know", "Something you are", "Something you have", "Something you set"],
        answer: "A",
        explanation: "PINs are knowledge-based factors and fall under 'something you know.'"
      },
      {
        question: "Marie is implementing a PAM solution and wants to ensure that root passwords are available in the event of an outage. Which PAM-related tool is most likely to be useful in this situation?",
        choices: ["Ephemeral accounts", "Just-in-time permissions", "Password vaulting", "Token-based authentication"],
        answer: "C",
        explanation: "Password vaulting securely stores credentials and can provide access to them during outages when needed."
      },
      {
        question: "Jill sets her files on a Windows file share to allow Fred to access the files. What type of access control system is she using?",
        choices: ["Mandatory access control", "Rule-based access control", "Attribute-based access control", "Discretionary access control"],
        answer: "D",
        explanation: "Discretionary Access Control (DAC) allows the file owner to determine access rights to their files."
      },
      {
        question: "Lisa sets up an account on a website that allows her to log in with Google. When she logs in, Google provides an access token to the website that confirms that she is who she says she is but doesn't provide the site with her password. Which of the following technologies has she used?",
        choices: ["LDAP", "OAuth", "MITRE", "RADIUS"],
        answer: "B",
        explanation: "OAuth is a token-based authentication protocol that allows users to log in via third-party identity providers like Google."
      },
      {
        question: "Kyle has been asked to provide his government-issued ID as part of the creation of his user account. What process should he assume it is being used for?",
        choices: ["Biometric enrollment", "Just-in-time permission creation", "Identity proofing", "Federation"],
        answer: "C",
        explanation: "Identity proofing is the process of validating an individual's identity, often requiring government-issued ID."
      },
      {
        question: "What key concept below best describes only providing the permissions necessary to perform a role?",
        choices: ["Least privilege", "Best practice", "Ephemeral accounts", "Mandatory access control"],
        answer: "A",
        explanation: "Least privilege means granting users the minimum permissions necessary to complete their tasks."
      },
      {
        question: "Nina has recently left her organization. What should the organization do with her account?",
        choices: ["Transfer it to her replacement.", "Reprovision it for another user.", "Deprovision her account.", "Change the password and preserve the account."],
        answer: "C",
        explanation: "Deprovisioning ensures that former employees no longer have access and minimizes the risk of unauthorized access."
      },
      {
        question: "A person's name, age, location, or job title are all examples of what?",
        choices: ["Biometric factors", "Identity factors", "Attributes", "Account permissions"],
        answer: "C",
        explanation: "These are attributes that describe or are associated with a user's identity but are not used for authentication."
      },
      {
        question: "What type of access control scheme best describes the Linux filesystem?",
        choices: ["MAC", "RBAC", "DAC", "ABAC"],
        answer: "C",
        explanation: "Linux file systems use discretionary access control, where the owner of a file sets the access permissions."
      },
      {
        question: "Angela has chosen to federate with other organizations to allow use of services that each organization provides. What role does Angela's organization play when they authenticate their users and assert that those users are valid to other members of the federation?",
        choices: ["Service provider", "Relying party", "Authentication provider", "Identity provider"],
        answer: "D",
        explanation: "Angela's organization is acting as an identity provider (IdP). Other members of the federation may act as a service provider or relying party when they allow her users to access their services. Authentication provider is not a named role in typical federation activities."
      },
      {
        question: "Which of the following technologies is the least effective means of preventing shared accounts?",
        choices: ["Password complexity requirements", "Requiring biometric authentication", "Requiring one-time passwords via a token", "Requiring a one-time password via an application"],
        answer: "A",
        explanation: "Password complexity requirements do not prevent sharing of complex passwords, making it the least effective option from the list. Biometric authentication measures will require the enrolled user to be there, although in some cases such as fingerprint systems, multiple users could each enroll a valid fingerprint for a single account. Both types of one-time passwords could be shared but make it harder and less convenient to share accounts."
      },
      {
        question: "What major difference is likely to exist between on-premises identity services and those used in a cloud-hosted environment?",
        choices: [
          "Account policy control will be set to the cloud provider's standards.",
          "The cloud service will provide account and identity management services.",
          "Multifactor authentication will not be supported by the cloud vendor.",
          "None of the above."
        ],
        answer: "B",
        explanation: "Most cloud services provide identity and authorization tools for their services. Most, although not all, allow customers to set some or even many of the account policies they will use, and most major vendors support some form of multifactor capability."
      },
      {
        question: "Amitoj wants to ensure that her organization's password policy does not allow users to reset their password multiple times until they can reuse their current password. What setting is used to prevent this?",
        choices: ["Complexity", "Length", "Expiration", "Age"],
        answer: "D",
        explanation: "Password age is set to prevent users from resetting their password enough times to bypass reuse settings. Complexity, length, and expiration do not influence this."
      },
      {
        question: "Which type of multifactor authentication is considered the least secure?",
        choices: ["HOTP", "SMS", "TOTP", "Biometric"],
        answer: "B",
        explanation: "SMS messages are not secure and could be accessed by cloning a SIM card or redirecting VoIP traffic, among other possible threat models. Both HOTP and TOTP tokens and applications as well as biometric factors are generally considered more secure than an SMS-based factor."
      },
      {
        question: "Geeta has been issued a USB security key as part of her organization's multifactor implementation. What type of implementation is this?",
        choices: ["A hard token", "A biometric token", "A soft token", "An attestation token"],
        answer: "A",
        explanation: "A USB security key is an example of a hard, or physical, token. An application is an example of a soft token. A biometric factor might be a fingerprint or faceprint. Attestation is a formal verification that something is true. Attestation tokens were made up for this question."
      },
      {
        question: "Michelle enables the Windows picture password feature to control logins for her laptop. Which type of attribute will it provide?",
        choices: ["Somewhere you are", "Something you know", "Something you are", "Someone you know"],
        answer: "B",
        explanation: "Picture password asks users to click on specific, self-defined parts of a picture. This means that clicking on those points is something you know. Something you are involves biometric traits, and somewhere you are relies on geographic locations."
      },
      {
        question: "What purpose would Linux file permissions set to rw-r--r-- serve?",
        choices: [
          "To allow the owner to read and write the file, and for the owner's group and others to be able to read it",
          "To allow all users to read and write the file, and for the group and owner to be able to read it",
          "To allow system administrators to read and write the file, and for users and all others to be able to read it",
          "To prevent reading and writing for all users, and to prevent reading by groups and a specific user"
        ],
        answer: "A",
        explanation: "Linux file permissions are read left to right, with the first three characters indicating read, write, and execute permissions (rwx) for the owner of the file, the second three apply to the group, and the last three to all other users. Any indicated with a – are not allowed for that set."
      },
      {
        question: "Theresa wants to implement an access control scheme that sets permissions based on what the individual's job requires. Which of the following schemes is most suited to this type of implementation?",
        choices: ["ABAC", "DAC", "RBAC", "MAC"],
        answer: "C",
        explanation: "Role-based access control (RBAC) sets permissions based on an individual's role, which is typically associated with their job. Attribute-based access control (ABAC) is typically matched to other attributes than the job role. Discretionary access control (DAC) and mandatory access control (MAC) are commonly implemented at the operating system level."
      },
      {
        question: "Which of the following biometric technologies is most broadly deployed due to its ease of use and acceptance from end users?",
        choices: ["Voice print recognition", "Gait recognition", "Retina scanners", "Fingerprint scanner"],
        answer: "D",
        explanation: "Fingerprint scanners are found on many mobile devices and laptops, making them one of the most broadly deployed biometric technologies. Facial recognition is also broadly deployed, but it is not mentioned in this question or offered as an option."
      },
      {
        question: "Adam want to increase his organization's passwords resistance to attacks in the event that the password hash database is stolen by attackers. Which of the following password security settings has the largest impact on password cracking if his organization's current passwords are 8 characters long?",
        choices: ["Password complexity", "Password length", "Password reuse limitations", "Preventing the use of common words in passwords"],
        answer: "B",
        explanation: "Password length has the largest impact on preventing password cracking. When paired with a strong password hash algorithm and proper use of technology like salting, long passwords are much harder to crack. Complexity is the next most important option, as preventing simple repeated characters and similar problematic passwords helps reduce the probability of easily cracked passwords being used. Reuse limitations and preventing common words are less useful."
      },
      {
        question: "A PIN is an example of what type of factor?",
        choices: ["Something you know", "Something you are", "Something you have", "Something you set"],
        answer: "A",
        explanation: "PINs and passwords are both examples of something you know. Something you set is not a type of factor. Biometric factors are an example of something you are, and a physical USB token would be a common example of something you have."
      },
      {
        question: "Marie is implementing a PAM solution and wants to ensure that root passwords are available in the event of an outage. Which PAM-related tool is most likely to be useful in this situation?",
        choices: ["Ephemeral accounts", "Just-in-time permissions", "Password vaulting", "Token-based authentication"],
        answer: "C",
        explanation: "Password vaulting, which stores passwords for use with proper authentication and rights, is the most appropriate solution for Marie's needs. Ephemeral accounts and just-in-time permissions are typically used under normal circumstances to provide least privilege access as needed. Token-based authentication is not specifically a PAM solution."
      },
      {
        question: "Jill sets her files on a Windows file share to allow Fred to access the files. What type of access control system is she using?",
        choices: ["Mandatory access control", "Rule-based access control", "Attribute-based access control", "Discretionary access control"],
        answer: "D",
        explanation: "Jill is able to make decisions about the rights she grants on her files, meaning this is a discretionary access control system. A mandatory access control system relies on labels to set access control rules. Rule-based access control systems rely on rules to define access, and attribute-based access control systems grant access based on attributes like job roles or locations."
      },
      {
        question: "Lisa sets up an account on a website that allows her to log in with Google. When she logs in, Google provides an access token to the website that confirms that she is who she says she is but doesn't provide the site with her password. Which of the following technologies has she used?",
        choices: ["LDAP", "OAuth", "MITRE", "RADIUS"],
        answer: "B",
        explanation: "OAuth is an authentication protocol that allows services to receive authentication tokens from an identity provider without needing the user's password. LDAP is a directory service and is often used as part of SSO processes. MITRE is a nonprofit organization, and RADIUS is an authentication technology."
      },
      {
        question: "Kyle has been asked to provide his government-issued ID as part of the creation of his user account. What process should he assume it is being used for?",
        choices: ["Biometric enrollment", "Just-in-time permission creation", "Identity proofing", "Federation"],
        answer: "C",
        explanation: "Kyle can assume that his government-issued ID is being used as part of an identity proofing process to validate that he is who he claims to be. Biometric enrollment typically requires interaction with an enrollment process to scan or capture biometric information. Just-in-time permission creation is done when access is requested and does not require government ID, and federation connects identity providers with service providers, which is not described here."
      },
      {
        question: "What key concept below best describes only providing the permissions necessary to perform a role?",
        choices: ["Least privilege", "Best practice", "Ephemeral accounts", "Mandatory access control"],
        answer: "A",
        explanation: "The principle of least privilege means that users should only be given the permissions necessary to perform their role. Best practice is a general term describing commonly recommended and accepted industry practices. Temporal accounts are ephemeral, or short-lived accounts. Mandatory access control is an access control scheme."
      },
      {
        question: "Nina has recently left her organization. What should the organization do with her account?",
        choices: ["Transfer it to her replacement.", "Reprovision it for another user.", "Deprovision her account.", "Change the password and preserve the account."],
        answer: "C",
        explanation: "Without other factors that would require the account to be retained, deprovisioning accounts that belonged to users who have left the organization is a best practice. Transferring accounts or reprovisioning them may expose data to new users or provide them with rights that they should not have."
      },
      {
        question: "A person's name, age, location, or job title are all examples of what?",
        choices: ["Biometric factors", "Identity factors", "Attributes", "Account permissions"],
        answer: "C",
        explanation: "A person's name, age, location, job title, and even things like their height or their hair color are all attributes that may be associated with a person's identity. None of these describe biometric factors used for authentication, and identity factors are something you are, something you have, or somewhere you are. Account permissions determine what you can do, not attributes like these."
      },
      {
        question: "What type of access control scheme best describes the Linux filesystem?",
        choices: ["MAC", "RBAC", "DAC", "ABAC"],
        answer: "C",
        explanation: "Linux users can change who can read, write, or execute files and directories they own, which is discretionary access control (DAC). Mandatory access control (MAC) would enforce settings set by the systems administrator without users having the rights to make their own decisions. While role-based access control is involved, DAC best describes the access control scheme. ABAC is not a default method for setting rights for the Linux filesystem."
      },
      {
        question: "Naomi wants to handle increasing load by scaling cloud-hosted resources as needed while having the change remain transparent to users. She also wants to allow for upgrades and system replacements transparently. What solution should she select?",
        choices: ["Load balancing", "Clustering", "Geographic diversity", "A hot site"],
        answer: "A",
        explanation: "Naomi should select a load balancing solution. Load balancers allow multiple systems or services to appear like a single resource and can take systems out of the load-balanced pool to allow for upgrades or changes in resources required. Clustering is used to allow groups of computers to perform the same task, but without a load balancer cannot provide the same transparent service appearing as the same system. Geographic diversity and hot sites are concepts used to provide resilience but don't provide this capability."
      },
      {
        question: "Rick performs a backup that captures the changes since the last full backup. What type of backup has he performed?",
        choices: ["A new full backup", "A snapshot", "An incremental backup", "A differential backup"],
        answer: "D",
        explanation: "Differential backups back up the changes since the last full backup. Incremental backups back up changes since the last backup, and snapshots are a live copy of a system. This is not a full backup, because it is capturing changes since a full backup."
      },
      {
        question: "What type of recovery site has some or most systems in place but does not have the data needed to take over operations?",
        choices: ["A hot site", "A warm site", "A cloud site", "A cold site"],
        answer: "B",
        explanation: "Warm sites have systems, connectivity, and power but do not have the live or current data to immediately take over operations. A hot site can immediately take over operations, whereas a cold site has space and power, and likely connectivity, but will require that systems and data be put in place to be used. Cloud sites are not one of the three common types of recovery sites."
      },
      {
        question: "Ben wants to test his warm site to verify that it will take over operations successfully. What type of testing is this?",
        choices: ["Parallel processing", "Simulation", "Failover", "A tabletop exercise"],
        answer: "C",
        explanation: "Testing that involves an actual failover to another site or service is failover testing. Parallel processing runs both sites or services at the same time; simulation and tabletops both review what would happen without making the actual change."
      },
      {
        question: "Felix wants to clone a virtual machine. What should he do to capture a live machine, including the machine state?",
        choices: ["A full backup", "A snapshot", "A differential backup", "Live boot media"],
        answer: "B",
        explanation: "Virtual machine snapshots capture the machine state at a point in time and will allow Felix to clone the system. A full backup and a differential backup can be used to capture the disk for the machine but typically will not capture the memory state and other details of the system state. Live boot media allows you to boot and run a nonpersistent system from trusted media."
      },
      {
        question: "Sally is working to restore her organization's operations after a disaster took her datacenter offline. What critical document should she refer to as she restarts systems?",
        choices: ["The restoration order documentation", "The TOTP documentation", "The HOTP documentation", "The last-known good configuration documentation"],
        answer: "A",
        explanation: "A documented restoration order helps ensure that systems and services that have dependencies start in the right order and that high-priority or mission-critical services are restored first. TOTP and HOTP are types of one-time password technology, and last-known good configurations are often preserved with a snapshot or other technology that can allow a system to return to a known good status after an issue such as a bad patch or configuration change."
      },
      {
        question: "Mike wants to stop vehicles from traveling toward the entrance of his building. What physical security control should he implement?",
        choices: ["An air gap", "A hot aisle", "A robotic sentry", "A bollard"],
        answer: "D",
        explanation: "Bollards are physical security controls that prevent vehicles from accessing or ramming doors or other areas. They may look like pillars, planters, or other innocuous objects. An air gap is a physical separation of technology environments; a hot aisle is the aisle where systems in a datacenter exhaust warm air; and unlike in movies, robotic sentries are not commonly deployed and aren't ready to stop vehicles in most current circumstances."
      },
      {
        question: "Alecia wants to ensure that her backups cannot be accessed by third parties while stored in an offsite storage location. What should she do to secure her backups?",
        choices: ["Hash the backup data.", "Avoid the use of offsite storage locations.", "Employ security guards.", "Encrypt the backup data."],
        answer: "D",
        explanation: "Encryption is commonly used to ensure that backup media or data that is exposed is not accessible to third parties. This does mean that Alecia must carefully secure the encryption keys for the backup. Hashing that data would not keep it secure, and if only hashes were stored the data would be unrecoverable. Security guards are expensive and not a complete solution if data is inadvertently exposed, and offsite, secure storage locations are a useful and common solution for organizations that want to have remote backups."
      },
      {
        question: "Fred wants to be able to recover his database transactions at any point in time if a physical disaster occurs involving his datacenter. His organization uses daily backups. What additional solution should he select to support this need?",
        choices: ["Onsite journaling", "Onsite snapshots", "Offsite journaling", "Offsite snapshots"],
        answer: "C",
        explanation: "Offsite journaling will allow transactions to be recorded and to remain available if a significant event occurred that involved his datacenter. Snapshots are useful at a point in time but do not retain a transaction log between snapshots."
      },
      {
        question: "Ellen is concerned about her company's resilience and wants to ensure it can handle either changing loads or support disaster recovery and business continuity efforts if a primary location or datacenter were taken offline. Which of the following should she primarily focus on during her capacity planning?",
        choices: ["People, technology, and infrastructure", "A generator and a UPS", "RAID 0, 1, 5, and 10", "Incremental, differential, and full backups"],
        answer: "A",
        explanation: "Resilience requires capacity planning to ensure that capacity—including staff, technology, and infrastructure—is available when is needed. Although a generator, UPS, various RAID levels, and backups have their place in disaster recovery and contingency planning, they are not the primary focus of resiliency and capacity planning."
      },
      {
        question: "Madhuri has deployed a replication tool that copies data over to a secondary hot site in real time. What type of replication has she deployed?",
        choices: ["Synchronous replication", "Journaled replication", "Asynchronous replication", "Snapshot-based replication"],
        answer: "A",
        explanation: "Synchronous replication occurs in real time, whereas asynchronous replication occurs after the fact but more regularly than a backup. Journaled and snapshot-based replication are not specific types of replication."
      },
      {
        question: "What factor is a major reason organizations do not use security guards?",
        choices: ["Reliability", "Training", "Cost", "Social engineering"],
        answer: "C",
        explanation: "Security guards can be one of the costliest physical security controls over time, making the cost of guards one of the most important deciding factors guiding when and where they will be employed. Reliability, training, and the potential for social engineering are all possible issues with security guards, but none of these is the major driver in the decision process."
      },
      {
        question: "Megan wants to deploy a sensor that is inexpensive, yet will allow her to detect humans entering and moving in a secured room. Which of the following should she select?",
        choices: ["An infrared sensor", "A microwave sensor", "An ultrasonic sensor", "A pressure sensor"],
        answer: "A",
        explanation: "Infrared sensors balance lower cost with the ability to detect humans entering and moving in a space. Microwave sensors are more expensive but can provide better coverage, including traveling through some barriers. Ultrasonic sensors are rarely used for this purpose, and pressure sensors are limited to the pad where they are deployed, making them expensive and challenging to use for rooms or larger spaces."
      },
      {
        question: "Kathleen wants to discourage potential attackers from entering the facility she is responsible for. Which of the following is not a common control used for this type of preventive defense?",
        choices: ["Fences", "Lighting", "Platform diversity", "Video surveillance"],
        answer: "C",
        explanation: "Fences, lighting, and video surveillance can all help discourage potential malicious actors from entering an area, although a determined adversary will ignore or bypass all three. Platform diversity can help make it harder for attackers to succeed, but this is primarily a resilience tactic, and remains more costly to maintain and implement."
      },
      {
        question: "How does technology diversity help ensure cybersecurity resilience?",
        choices: [
          "It ensures that a vulnerability in a single company's product will not impact the entire infrastructure.",
          "If a single vendor goes out of business, the company does not need to replace its entire infrastructure.",
          "It means that a misconfiguration will not impact the company's entire infrastructure.",
          "All of the above."
        ],
        answer: "D",
        explanation: "Technology diversity helps ensure that a single failure—due to a vendor, vulnerability, or misconfiguration—will not impact an entire organization. Technology diversity does have additional costs, including training, patch management, and configuration management."
      },
      {
        question: "Scott sends his backups to a company that keeps them in a secure vault. What type of backup solution has he implemented?",
        choices: ["Nearline", "Safe", "Onsite", "Offsite"],
        answer: "D",
        explanation: "Scott has implemented an offsite backup scheme. His backups will take longer to retrieve because they are at a remote facility and will have to be sent back to him, but they are likely to survive any disaster that occurs in his facility or datacenter. Onsite backups are kept immediately accessible, whereas nearline backups can be retrieved somewhat more slowly than online backups but faster than offline backups. “Safe backups” is not an industry term."
      },
      {
        question: "Gabby wants to detect physical brute-force attempts against her organization. What solution is best suited to this?",
        choices: ["Security guards", "Locks", "Access badges", "An intrusion detection system (IDS)"],
        answer: "A",
        explanation: "Security guards who can monitor for and understand the signs of a physical brute-force attempt are the most useful control listed. Locks may show signs of attempts but require careful inspection, access badges would require log review and additional information to detect brute-force attacks, and an IDS is useful for network attacks."
      },
      {
        question: "Florian wants to test his high-availability designs but does not want to interrupt his organization's normal work. Which of the following is the least disruptive testing scenario?",
        choices: ["A failover exercise", "A tabletop exercise", "A partial failover exercise", "A simulation"],
        answer: "B",
        explanation: "A tabletop exercise is the least disruptive form of exercise. Even simulations have some risk if an employee does not fully realize that the scenario is simulated and takes action. Failover, even partial, involves the potential for disruption."
      },
      {
        question: "What type of physical security control is shown here?",
        image: "/images/vestibule.png",
        choices: ["A Faraday cage", "An access control vestibule", "A bollard", "An air gap"],
        answer: "B",
        explanation: "An access control vestibule uses a pair of doors. When an individual enters, the first door must be closed and secured before the second door can be opened. This helps prevent tailgating, since the person entering will notice anybody following them through the secured area. A Faraday cage is used to stop electromagnetic interference (EMI), a bollard prevents vehicular traffic, and an air gap is a physical separation of networks or devices."
      },      
      {
        question: "Gurvinder identifies a third-party datacenter provider over 90 miles away to run his redundant datacenter operations. Why has he placed the datacenter that far away?",
        choices: ["Because it is required by law", "Network traffic latency concerns", "Geographic dispersion", "Geographic tax reasons"],
        answer: "C",
        explanation: "Geographic dispersion helps ensure that a single natural or human-made disaster does not disable multiple facilities. This distance is not required by law; latency increases with distance; and though there may be tax reasons in some cases, this is not a typical concern for a security professional."
      },

    // Chapter 10: Cloud and Virtualization Security
  {
    question: "Kevin discovered that his web server was being overwhelmed by traffic, causing a CPU bottleneck. Using the interface offered by his cloud service provider, he added another CPU to the server. What term best describes Kevin's action?",
    choices: ["Elasticity", "Horizontal scaling", "Vertical scaling", "High availability"],
    answer: "C",
    explanation: "This is an example of adding additional capacity to an existing server, which is also known as vertical scaling. Kevin could also have used horizontal scaling by adding additional web servers. Elasticity involves the ability to both add and remove capacity on demand, and though it does describe this scenario, it's not as good a description as vertical scaling. There is no mention of increasing the server's availability."
  },
  {
    question: "Fran's organization uses a Type I hypervisor to implement an IaaS offering that it sells to customers. Which one of the following security controls is least applicable to this environment?",
    choices: [
      "Customers must maintain security patches on guest operating systems.",
      "The provider must maintain security patches on the hypervisor.",
      "The provider must maintain security patches on the host operating system.",
      "Customers must manage security groups to mediate network access to guest operating systems."
    ],
    answer: "C",
    explanation: "Type I hypervisors, also known as bare-metal hypervisors, run directly on top of the physical hardware and, therefore, do not require a host operating system."
  },
  {
    question: "In what cloud security model does the cloud service provider bear the most responsibility for implementing security controls?",
    choices: ["IaaS", "FaaS", "PaaS", "SaaS"],
    answer: "D",
    explanation: "The cloud service provider bears the most responsibility for implementing security controls in an SaaS environment and the least responsibility in an IaaS environment. This is due to the division of responsibilities under the cloud computing shared responsibility model."
  },
  {
    question: "Greg would like to find a reference document that describes how to map cloud security controls to different regulatory standards. What document would best assist with this task?",
    choices: ["CSA CCM", "NIST SP 500-292", "ISO 27001", "PCI DSS"],
    answer: "A",
    explanation: "The Cloud Security Alliance (CSA) Cloud Controls Matrix (CCM) is a reference document designed to help organizations understand the appropriate use of cloud security controls and map those controls to various regulatory standards. NIST SP 500-292 is a reference model for cloud computing and operates at a high level. ISO 27001 is a general standard for cybersecurity, and PCI DSS is a regulatory requirement for organizations involved in processing credit card transactions."
  },
  {
    question: "Wanda is responsible for a series of seismic sensors placed at remote locations. These sensors have low-bandwidth connections, and she would like to place computing power on the sensors to allow them to preprocess data before it is sent back to the cloud. What term best describes this approach?",
    choices: ["Edge computing", "Client-server computing", "Fog computing", "Thin client computing"],
    answer: "A",
    explanation: "This approach may be described as client-server computing, but that is a general term that describes many different operating environments. The better term to use here is edge computing, which involves placing compute power at the client to allow it to perform preprocessing before sending data back to the cloud. Fog computing is a related concept that uses IoT gateway devices that are located in close physical proximity to the sensors."
  },
  {
    question: "Which one of the following statements about cloud computing is incorrect?",
    choices: [
      "Cloud computing offers ubiquitous, convenient access.",
      "Cloud computing customers store data on hardware that is shared with other customers.",
      "Cloud computing customers provision resources through the service provider's sales team.",
      "Cloud computing resources are accessed over a network."
    ],
    answer: "C",
    explanation: "One of the key characteristics of cloud computing is that customers can access resources on-demand with minimal service provider interaction. Cloud customers do not need to contact a sales representative each time they wish to provision a resource but can normally do so on a self-service basis."
  },
  {
    question: "Helen designed a new payroll system that she offers to her customers. She hosts the payroll system in AWS and her customers access it through the web. What tier of cloud computing best describes Helen's service?",
    choices: ["PaaS", "SaaS", "FaaS", "IaaS"],
    answer: "B",
    explanation: "Helen is using IaaS services to create her payroll product. She is then offering that payroll service to her customers as a SaaS solution."
  },
  {
    question: "Which cloud computing deployment model requires the use of a unifying technology platform to tie together components from different providers?",
    choices: ["Public cloud", "Private cloud", "Community cloud", "Hybrid cloud"],
    answer: "D",
    explanation: "Hybrid cloud environments blend elements of public, private, and/or community cloud solutions. A hybrid cloud requires the use of technology that unifies the different cloud offerings into a single, coherent platform."
  },
  {
    question: "Which one of the following would not commonly be available as an IaaS service offering?",
    choices: ["CRM", "Storage", "Networking", "Computing"],
    answer: "A",
    explanation: "Customer relationship management (CRM) packages offered in the cloud would be classified as software-as-a-service (SaaS), since they are not infrastructure components. Storage, networking, and computing resources are all common IaaS offerings."
  },
  {
    question: "Which one of the following is not an example of infrastructure as code?",
    choices: [
      "Defining infrastructure in JSON",
      "Writing code to interact with a cloud provider's API",
      "Using a cloud provider's web interface to provision resources",
      "Defining infrastructure in YAML"
    ],
    answer: "C",
    explanation: "Infrastructure as code (IaC) is any approach that automates the provisioning, management, and deprovisioning of cloud resources. Defining resources through JSON or YAML is IaC, as is writing code that interacts with an API. Provisioning resources through a web interface is manual, not automated, and therefore does not qualify as IaC."
  },
  {
    question: "Brian is selecting a CASB for his organization, and he would like to use an approach that interacts with the cloud provider directly. Which CASB approach is most appropriate for his needs?",
    choices: ["Inline CASB", "Outsider CASB", "Comprehensive CASB", "API-based CASB"],
    answer: "D",
    explanation: "API-based CASB solutions interact directly with the cloud provider through the provider's API. Inline CASB solutions intercept requests between the user and the provider. Outsider and comprehensive are not categories of CASB solutions."
  },
  {
    question: "In which of the following cloud categories are customers typically charged based on the number of virtual server instances dedicated to their use?",
    choices: ["IaaS only", "SaaS only", "IaaS and PaaS", "IaaS, SaaS, and PaaS"],
    answer: "C",
    explanation: "Customers are typically charged for server instances in both IaaS environments, where they directly provision those instances, and PaaS environments, where they request the number of servers needed to support their applications. In an SaaS environment, the customer typically has no knowledge of the number of server instances supporting their use."
  },
  {
    question: "Brian would like to limit the ability of users inside his organization to provision expensive cloud server instances without permission. What type of control would best help him achieve this goal?",
    choices: ["Resource policy", "Security group", "Multifactor authentication", "Secure web gateway"],
    answer: "A",
    explanation: "Cloud providers offer resource policies that customers may use to limit the actions that users of their accounts may take. Implementing resource policies is a good security practice to limit the damage caused by an accidental command, a compromised account, or a malicious insider."
  },
  {
    question: "Ursula would like to link the networks in her on-premises datacenter with cloud VPCs in a secure manner. What technology would help her best achieve this goal?",
    choices: ["Transit gateway", "HSM", "VPC endpoint", "SWG"],
    answer: "A",
    explanation: "Cloud providers offer VPC endpoints that allow connections of VPCs to each other using the cloud provider’s secure network. Cloud transit gateways extend this model even further, allowing the direct interconnection of cloud VPCs with on-premises VLANs for hybrid cloud operations. Secure web gateways (SWGs) provide a layer of application security for cloud-dependent organizations. Hardware security modules (HSMs) are special-purpose computing devices that manage encryption keys and also perform cryptographic operations in a highly efficient manner."
  },
  {
    question: "What component of a virtualization platform is primarily responsible for preventing VM escape attacks?",
    choices: ["Administrator", "Guest operating system", "Host operating system", "Hypervisor"],
    answer: "D",
    explanation: "Virtual machine (VM) escape vulnerabilities are the most serious issue that can exist in a virtualized environment, particularly when a virtual host runs systems of differing security levels. In an escape attack, the attacker has access to a single virtual host and then manages to leverage that access to intrude upon the resources assigned to a different virtual machine. The hypervisor is supposed to prevent this type of access by restricting a virtual machine's access to only those resources assigned to that machine."
  },
  {
    question: "Ryan is selecting a new security control to meet his organization's objectives. He would like to use it in their multicloud environment and would like to minimize the administrative work required from his fellow technologists. What approach would best meet his needs?",
    choices: ["Third-party control", "Internally developed control", "Cloud-native control", "Any of the above"],
    answer: "A",
    explanation: "Controls offered by cloud service providers have the advantage of direct integration with the provider's offerings, often making them cost-effective and user-friendly. Third-party solutions are often more costly, but they bring the advantage of integrating with a variety of cloud providers, facilitating the management of multicloud environments."
  },
  {
    question: "Kira would like to implement a security control that can implement access restrictions across all of the SaaS solutions used by her organization. What control would best meet her needs?",
    choices: ["Security group", "Resource policy", "CASB", "SWG"],
    answer: "C",
    explanation: "Cloud access security brokers (CASBs) are designed specifically for this situation: enforcing security controls across cloud providers. A secure web gateway (SWG) may be able to achieve Kira's goal, but it would be more difficult to do so. Security groups and resource policies are controls used in IaaS environments."
  },
  {
    question: "Howard is assessing the legal risks to his organization based on its handling of PII. The organization is based in the United States, handles the data of customers located in Europe, and stores information in Japanese datacenters. What law would be most important to Howard during his assessment?",
    choices: ["Japanese law", "European Union law", "U.S. law", "All should have equal weight."],
    answer: "D",
    explanation: "The principle of data sovereignty states that data is subject to the legal restrictions of any jurisdiction where it is collected, stored, or processed. In this case, Howard needs to assess the laws of all three jurisdictions."
  },
  {
    question: "Brenda's company provides a managed incident response service to its customers. What term best describes this type of service offering?",
    choices: ["MSP", "PaaS", "SaaS", "MSSP"],
    answer: "D",
    explanation: "Brenda's company is offering a technology service to customers on a managed basis, making it a managed service provider (MSP). However, this service is a security service, so the term managed security service provider (MSSP) is a better description of the situation."
  },
  {
    question: "Tony purchases virtual machines from Microsoft Azure exclusively for use by his organization. What model of cloud computing is this?",
    choices: ["Public cloud", "Private cloud", "Hybrid cloud", "Community cloud"],
    answer: "A",
    explanation: "This is an example of public cloud computing because Tony is using a public cloud provider, Microsoft Azure. The fact that Tony is limiting access to virtual machines to his own organization is not relevant because the determining factor for the cloud model is whether the underlying infrastructure is shared, not whether virtualized resources are shared."
  },
 
  // Chapter 11: Endpoint Security
{
    question: "Lin's hardware manufacturer has stopped selling the model of device that Lin's organization uses and has also stopped providing security or other updates. What phase of the hardware life cycle is the device in?",
    choices: ["End-of-life", "Legacy", "End-of-sales", "Senescence"],
    answer: "B",
    explanation: "Legacy hardware is unsupported and no longer sold. End-of-life typically means that the device is no longer being made but is likely to still have support for a period of time. End-of-sales means the device is no longer being sold, but again, may have support for some time. Senescence is not a term typically used in hardware life cycles."
  },
  {
    question: "Naomi has discovered the following TCP ports open on a system she wants to harden. Which ports are used for unsecure services and thus should be disabled to allow their secure equivalents to continue to be used?",
    choices: ["21, 22, and 80", "21 and 80", "21, 23, and 80", "22 and 443"],
    answer: "C",
    explanation: "The services listed are: 21—FTP, 22—SSH, 23—Telnet, 80—HTTP, 443—HTTPS. Of these services, SSH (Port 22) and HTTPS (port 443) are secure options for remote shell access and HTTP. Although secure mode FTP (FTP/S) may run on TCP 21, there is not enough information to know for sure, and HTTPS can be used for secure file transfer if necessary. Thus, Naomi's best option is to disable all three likely unsecure protocols: FTP (port 21), Telnet (port 23), and HTTP (port 80)."
  },
  {
    question: "Frank's organization is preparing to deploy a data loss prevention (DLP) system. What key process should they undertake before they deploy it?",
    choices: ["Define data life cycles for all nonsensitive data.", "Encrypt all sensitive data.", "Implement and use a data classification scheme.", "Tag all data by creator or owner."],
    answer: "C",
    explanation: "Protecting data using a DLP requires data classification so that the DLP knows which data should be protected and what policies to apply to it. Defining data life cycles can help prevent data from being kept longer than it should be and improves data security by limiting the data that needs to be secured, but it isn't necessary as part of a DLP deployment. Encrypting all sensitive data may mean the DLP cannot recognize it and may not be appropriate for how it is used. Tagging all data with a creator or owner can be useful but is not required for a DLP rollout—instead, knowing the classification of the data is more important."
  },
  {
    question: "Oliver wants to store and manage secrets in his cloud service provider's environment. What type of solution should he look for as part of their offerings?",
    choices: ["A TPM", "A secure enclave", "A KMS", "A Titan M"],
    answer: "C",
    explanation: "Oliver should look for a key management system, or KMS, which will allow him to securely create, store, and manage keys in a cloud environment. TPMs, secure enclaves, and Google's Titan M are all local hardware solutions."
  },
  {
    question: "What is the key difference between EDR and XDR solutions?",
    choices: ["The variety of malware it can detect", "The number of threat feeds that are used", "The breadth of the technology stack that is covered", "The volume of logs that can be processed"],
    answer: "C",
    explanation: "XDR is similar to EDR but has a broader perspective covering not only endpoints but also cloud services, security platforms, and other components. Thus, the breadth of coverage of the technology stack is broader for XDR solutions."
  },
  {
    question: "Michelle wants to prevent unauthorized applications from being installed on a Windows system. What type of tool can she use to stop applications from being installed?",
    choices: ["Antivirus", "A GPO", "An EDR", "A HIPS"],
    answer: "B",
    explanation: "A Windows Group Policy Object (GPO) can be used to control whether users are able to install software. Antivirus will not stop this, nor will EDR or a HIPS."
  },
  {
    question: "What term is used to describe tools focused on detecting and responding to suspicious activities occurring on endpoints like desktops, laptops, and mobile devices?",
    choices: ["EDR", "IAM", "FDE", "ESC"],
    answer: "A",
    explanation: "Endpoint detection and response (EDR) systems provide monitoring, detection, and response capabilities for systems. EDR systems capture data from endpoints and send it to a central repository, where it can be analyzed for issues and indicators of compromise or used for incident response activities. IAM is identity and access management, FDE is full-disk encryption, and ESC is not a commonly used security acronym."
  },
  {
    question: "Fred has recently purchased a network router and is preparing to deploy it. Which of the following is a common step in deploying new routers?",
    choices: ["Disabling unwanted services", "Removing unnecessary software", "Installing antivirus", "Changing default passwords"],
    answer: "D",
    explanation: "Network devices as well as many other devices like printers come with default passwords set. Fred should change the default password as part of the process of setting up his new router."
  },
  {
    question: "Charlene wants to prevent attacks against her system that leverage flaws in the services that it provides while still keeping the services accessible. What hardening technique should she use?",
    choices: ["A host-based firewall", "A host-based IPS", "Encryption", "An EDR"],
    answer: "B",
    explanation: "A host-based intrusion prevention system (HIPS) can detect and prevent attacks against services while allowing the service to be accessible. A firewall can only block based on port, protocol, and IP; encryption won't prevent this; and an EDR is primarily targeted at malicious software and activity, not at network-based attacks on services."
  },
  {
    question: "Allan is preparing to harden his organization's network switches. Which of the following is not a common hardening technique for network devices?",
    choices: ["Removing unnecessary software", "Installing patches", "Administrative VLANs", "Changing default passwords"],
    answer: "A",
    explanation: "Unlike computers and mobile devices, switches and other network devices typically do not have additional software that can be removed. Installing patches, placing administrative interfaces on protected VLANs, and changing default passwords are all common hardening techniques for network devices like switches."
  },
  {
    question: "Helen's organization is planning to deploy IoT devices across their buildings as part of a HVAC system. Helen knows that the vendor for the IoT devices does not provide regular security updates to the device's web interfaces that are used to manage the devices. What security control should she recommend to help protect the devices on the network?",
    choices: ["Install host-based firewalls.", "Deploy the IoT devices to a protected VLAN.", "Install host-based IPS.", "Disable the web interfaces for the IoT devices."],
    answer: "B",
    explanation: "Since the web interfaces are needed to manage the devices, Helen's best option is to place the IoT devices in a protected VLAN. IoT devices will not typically allow additional software to be installed, meaning that adding firewalls or a HIPS won't work."
  },
  {
    question: "What is the primary reason to remove unnecessary software during hardening efforts?",
    choices: ["To reduce the attack footprint of the device", "To reduce the number of patches that are installed", "To reduce the number of firewall rules required for the device", "To support incident response (IR) activities"],
    answer: "A",
    explanation: "Removing unnecessary software helps to reduce the attack surface of the devices. Not all software runs a service or opens a network port, but installed software provides additional opportunities for attackers to find vulnerabilities. That means that reducing firewall rules is not a primary purpose. While removing it may reduce the number of patches required by a device, that is not the primary driver. Finally, while incident response efforts may point to a need for further hardening to prevent future incidents, removing unnecessary software is not a typical step in support of IR activities."
  },
  {
    question: "Brian has deployed a system that monitors sensors and uses that data to manage the power distribution for the power company that he works for. Which of the following terms is commonly used to describe this type of control and monitoring solution?",
    choices: ["SCADA", "SIM", "HVAC", "AVAD"],
    answer: "A",
    explanation: "SCADA (supervisory control and data acquisition) is a system architecture that combines data acquisition and control devices with communications methods and interfaces to oversee complex industrial and manufacturing processes, just like those used in utilities. A SIM (subscriber identity module) is the small card used to identify cell phones; HVAC stands for heating, ventilation, and air-conditioning; and AVAD was made up for this question."
  },
  {
    question: "The organization that Lynn works for wants to deploy an embedded system that needs to process data as it comes in to the device without processing delays or other interruptions. What type of solution does Lynn's company need to deploy?",
    choices: ["An MFP", "A HIPS", "An SoC", "An RTOS"],
    answer: "D",
    explanation: "A real-time operating system (RTOS) is an OS that is designed to handle data as it is fed to the operating system, rather than delaying handling it as other processes and programs are run. Real-time operating systems are used when processes or procedures are sensitive to delays that might occur if responses do not happen immediately. An MFP is a multifunction printer, a HIPS is a host intrusion prevention system, and an SoC is a system on a chip—which is hardware, which might run an RTOS, but the option does not mention what type of OS the SoC is running."
  },
  {
    question: "Which of the following is not a common constraint of an embedded system?",
    choices: ["Compute", "Cost", "Network", "Authentication"],
    answer: "B",
    explanation: "Embedded systems are available at many price points. Understanding constraints that limited resources create for embedded systems helps security professionals identify appropriate security controls and options."
  },
  {
    question: "Jim configures a Windows machine with the built-in BitLocker full-disk encryption tool that uses a TPM chip. When is the machine least vulnerable to having data stolen from it?",
    choices: ["When the machine is off", "When the machine is booted and logged in but is locked", "When the machine is booted and logged in but is unlocked", "When the machine is booted and logged in but is asleep"],
    answer: "A",
    explanation: "Jim knows that once a BitLocker-enabled machine is booted, the drive is unlocked and could be accessed. He would be least worried if the machine were off and was stolen, or if the drive itself were stolen from the machine, since the data would not be accessible in either of those cases."
  },
  {
    question: "Olivia wants to install a host-based security package that can detect attacks against the system coming from the network, but she does not want to take the risk of blocking the attacks since she fears that she might inadvertently block legitimate traffic. What type of tool could she install that will meet this requirement?",
    choices: ["A host firewall", "A host-based intrusion detection system", "A host-based intrusion prevention system", "A data loss prevention tool"],
    answer: "B",
    explanation: "Olivia should install a host-based intrusion detection system (HIDS). An HIDS can detect and report on potential attacks but does not have the ability to stop them. A host-based intrusion prevention system (HIPS) can be configured to report only on attacks, but it does have the built-in ability to be set up to block them. Firewalls can block known ports, protocols, or applications, but they do not detect attacks—although advanced modern firewalls blur the line between firewalls and other defensive tools. Finally, a data loss prevention (DLP) tool focuses on preventing data exposures, not on stopping network attacks."
  },
  {
    question: "Anita wants to enforce security settings across her organization's Windows Active Directory domain. What tool can she use to do this?",
    choices: ["EDR", "Group Policy", "XDR", "SELinux"],
    answer: "B",
    explanation: "Group Policy deployed via Active Directory will allow Anita to set security settings across her domain managed systems. EDR and XDR are useful for detecting and responding to malware and malicious actors but not for deploying security configurations. SELinux is a Linux kernel-based security module that provides additional security capabilities and options on top of existing Linux distributions."
  },
  {
    question: "Chris wants systems that connect to his network to report their boot processes to a server where they can be validated before being permitted to join the network. What technology should he use to do this on the workstations?",
    choices: ["UEFI/Trusted boot", "BIOS/Trusted boot", "UEFI/Measured boot", "BIOS/Measured boot"],
    answer: "C",
    explanation: "Chris knows that BIOS-based systems do not support either of these modes, and that trusted boot validates every component before loading it, whereas measured boot logs the boot process and sends it to a server that can validate it before permitting the system to connect to the network or perform other actions."
  },
  {
    question: "Elaine wants to securely erase the contents of a tape used for backups in her organization's tape library. What is the fastest secure erase method available to her that will allow the tape to be reused?",
    choices: ["Using a degausser", "Wiping the tape by writing a random pattern of 1s and 0s to it", "Incinerating the tape", "Wiping the tape by writing all 1s or all 0s to it"],
    answer: "A",
    explanation: "A degausser is a quick and effective way to erase a tape before it is reused. Wiping a tape by writing 1s, 0s, or a pattern of 1s and 0s to it will typically be a slow operation and is not a common method of destroying data on a tape. Incinerating the tape won't allow it to be reused!"
  },
  
  //Chapter 12: Network Security
  {
    question: "11. What component of a zero-trust architecture forwards requests from subjects and acts on whether subjects are allowed to access resources?",
    choices: [
      "Policy administrators",
      "Policy enforcement points",
      "Policy engines",
      "Policy gateways"
    ],
    answer: "B",
    explanation: "Policy enforcement points communicate with policy administrators to forward requests from subjects and to receive instructions from them about connections to allow or end. Policy administrators are components that establish or remove the communication path between subjects and resources, including creating session-specific authentication tokens or credentials as needed. Policy engines make policy decisions based on both rules and external systems. Policy gateways are not reference components for zero-trust designs."
  },
  {
    question: "12. Gary wants to use secure protocols for email access for his end users. Which of the following groups of protocols should he implement to accomplish this task?",
    choices: [
      "DKIM, DMARC, HTTPS",
      "SPF, POPS, IMAPS",
      "POPS, IMAPS, HTTPS",
      "DMARC, DKIM, SPF"
    ],
    answer: "C",
    explanation: "End users may use secure POP (POPS), secure IMAP (IMAPS), and secure HTTP (HTTPS) to retrieve email. SPF, DKIM, and DMARC are used to identify and validate email servers, not to access email by end users."
  },
  {
    question: "13. Gary wants to prevent his organization's most sensitive data from being accessed by network-based attackers at any cost. What solution should he implement to ensure this?",
    choices: [
      "An air gap",
      "Firewall rules",
      "An IPS",
      "IPSec"
    ],
    answer: "A",
    explanation: "Physical isolation like an air gap is used when the additional work to manually transfer files is an acceptable trade-off against the potential for a security event caused by potential network-based attackers. Firewall rules, an IPS, or the use of IPSec to protect traffic will not sufficiently address this issue if any services remain accessible on the system."
  },
  {
    question: "14. Madhuri is designing a load-balancing configuration for her company and wants to keep a single node from being overloaded. What type of design will meet this need?",
    choices: [
      "A daisy chain",
      "Active/active",
      "Duck-duck-goose",
      "Active/passive"
    ],
    answer: "B",
    explanation: "Active/active designs spread traffic among active nodes, helping ensure that a single node will not be overwhelmed. Active/passive designs are useful for disaster recovery and business continuity, but they do not directly address heavy load on a single node. There are many load-balancing schemes, but daisy chains and duck-duck-goose are not among them."
  },
  {
    question: "15. What type of NAC will provide Isaac with the greatest amount of information about the systems that are connecting while also giving him the most amount of control of systems and their potential impact on other systems that are connected to the network?",
    choices: [
      "Agent-based, preadmission NAC",
      "Agentless, postadmission NAC",
      "Agent-based NAC, postadmission NAC",
      "Agentless, postadmission NAC"
    ],
    answer: "A",
    explanation: "Agent-based, preadmission NAC will provide Isaac with the greatest amount of information about a machine and the most control about what connects to the network and what can impact other systems. Since systems will not be connected to the network, even to a quarantine or preadmission zone, until they have been verified, Isaac will have greater control."
  },
  {
    question: "16. Danielle's organization has implemented a tool that combines SD-WAN, a CASB, and Zero Trust, among other security functions, to provide security regardless of where her organization's devices are. What type of solution has her organization implemented?",
    choices: [
      "A UTM",
      "An NGFW",
      "IPSec",
      "SASE"
    ],
    answer: "D",
    explanation: "SASE (Secure Access Service Edge) combines network security and device security by leveraging SD-WAN with security tools like Zero Trust, firewalls, and cloud access security brokers (CASBs). Both UTM and NGFW are advanced firewalls but do not provide this full functionality, and IPSec is a protocol used to provide encryption and authentication for network traffic."
  },
  {
    question: "17. Wayne is concerned that an on-path attack has been used against computers he is responsible for. What artifact is he most likely to find associated with this attack?",
    choices: [
      "A compromised router",
      "A browser plug-in",
      "A compromised server",
      "A modified hosts file"
    ],
    answer: "B",
    explanation: "Browser on-path attacks take advantage of malicious browser plug-ins or proxies to modify traffic at the browser level. They do not involve compromised routers or servers, and a modified hosts file is more likely to be involved in an on-path attack."
  },
  {
    question: "18. Elle has scanned her organization from an external IP address and has identified all of the services that are visible from the public Internet. What does this enable her to describe?",
    choices: [
      "If the organization is a fail-open organization",
      "Her organization's OSINT report",
      "Her organization's attack surface",
      "If the organization is a fail-closed organization"
    ],
    answer: "C",
    explanation: "Understanding what services your organization offers to the outside world is an important step in describing the organization's attack surface. Fail open and fail closed describe what happens when devices or systems fail, not vulnerability and service availability information. OSINT is a passive process and scanning is not a passive activity."
  },
  {
    question: "19. What technique is used to ensure that DNSSEC-protected DNS information is trustworthy?",
    choices: [
      "It is digitally signed.",
      "It is sent via TLS.",
      "It is encrypted using AES256.",
      "It is sent via an IPSec VPN."
    ],
    answer: "A",
    explanation: "DNSSEC does not encrypt data but does rely on digital signatures to ensure that DNS information has not been modified and that it is coming from a server that the domain owner trusts. DNSSEC does not protect confidentiality, which is a key thing to remember when discussing it as a security option. TLS, an IPSec VPN, or encryption via AES are all potential solutions to protect the confidentiality of network data."
  },
  {
    question: "20. Fred wants to ensure that the administrative interfaces for the switches and routers are protected so that they cannot be accessed by attackers. Which of the following solutions should he recommend as part of his organization's network design?",
    choices: [
      "NAC",
      "Trunking",
      "Out-of-band management",
      "Port security"
    ],
    answer: "C",
    explanation: "Out-of-band management places the administrative interface of a switch, router, or other device on a separate network or requires direct connectivity to the device to access and manage it. This ensures that an attacker who has access to the network cannot make changes to the network devices. NAC and port security help protect the network itself, whereas trunking is used to combine multiple interfaces, VLANs, or ports together."
  },
  
  // Chapter 13: Wireless and Mobile Security
{
    question: "Alyssa wants to harden iOS devices her organization uses. What set of guidelines can she follow to align to common industry security practices?",
    choices: ["OWASP", "CIS benchmarks", "NIST 800-103", "NIST 800-111"],
    answer: "B",
    explanation: "The Center for Internet Security (CIS) provides hardening guidelines known as CIS benchmarks that Alyssa can use as a guide to secure her organization's iOS devices. OWASP does not provide these, and NIST provides general guidance, not OS- or device-specific configuration guides."
  },
  {
    question: "Fred's company issues devices in a BYOD model. That means that Fred wants to ensure that corporate data and applications are kept separate from personal applications on the devices. What technology is best suited to meet this need?",
    choices: ["Biometrics", "Full-device encryption", "Context-aware authentication", "Containerization"],
    answer: "D",
    explanation: "Using a containerization system can allow Fred's users to run corporate applications and to use corporate data in a secure environment that cannot be accessed by other applications outside of the container on the device. Containerization schemes for mobile devices typically use encryption and other isolation techniques to ensure that data and applications do not cross over. Biometrics and context-aware authentication are useful for ensuring that the right user is using a device but don't provide this separation. Full-device encryption helps reduce the risk of theft or loss of a device resulting in a data breach."
  },
  {
    question: "Michelle has deployed iPads to her staff who work her company's factory floor. She wants to ensure that the devices work only in the factory and that if they are taken home they cannot access business data or services. What type of solution is best suited to her needs?",
    choices: ["Context-aware authentication", "Geofencing", "Geolocation", "Unified endpoint management (UEM)"],
    answer: "B",
    explanation: "Geofencing will allow Michelle to determine what locations the device should work in. The device will then use geolocation to determine when it has moved and where it is. In this case, the correct answer is therefore geofencing—simply having geolocation capabilities would not provide the solution she needs. Context-aware authentication can help by preventing users from logging in when they aren't in the correct location, but a device that was logged in may not require reauthentication. Finally, UEM, much like mobile device management, can be used to enforce these policies, but the most correct answer is geofencing."
  },
  {
    question: "Ivan is running an enterprise wireless network and his heatmap shows that two access points are likely conflicting with each other. What will the enterprise access controller most likely do to handle this conflict?",
    choices: ["Increase the broadcast power of one of the access points.", "Change the SSID for one of the access points.", "Disable one of the access points.", "Decrease the broadcast power of the access points."],
    answer: "D",
    explanation: "When access points conflict, enterprise wireless network management tools will typically decrease the power for both access points until the issue is resolved. Simply increasing power will cause more conflicts, changing the SSID would not serve typical enterprise models that use a single SSID to allow roaming, and disabling an access point may leave coverage gaps."
  },
  {
    question: "Chris wants to use geolocation technology to find where phones issued by his organization are located. Which of the following is not commonly used as part of geolocation techniques?",
    choices: ["Bluetooth", "GPS", "NFC", "Wi-Fi"],
    answer: "C",
    explanation: "Nearfield communication (NFC) is not typically used for geolocation because of its extremely short range. Geolocation services may use GPS, Wi-Fi, and Bluetooth to identify areas, access points, Bluetooth beacons, and other items that help with location services."
  },
  {
    question: "Daniel knows that WPA3 has added a method to ensure that brute-force attacks against weak preshared keys are less likely to succeed. What is this technology called?",
    choices: ["SAE", "CCMP", "PSK", "WPS"],
    answer: "A",
    explanation: "Simultaneous Authentication of Equals (SAE) is used to establish a secure peering environment and to protect session traffic. Since the process requires additional cryptographic steps, it causes brute-force attacks to be much slower and thus less likely to succeed while also providing more security than WPA2's preshared key (PSK) mode. WPS is Wi-Fi Protected Setup, a quick setup capability; CCMP is the encryption mode used for WPA2 networks. WPA3 moves to 128-bit encryption for Personal mode and can support 192-bit encryption in Enterprise mode."
  },
  {
    question: "Isabelle needs to select the EAP protocol that she will use with her wireless network. She wants to use a secure protocol that does not require client devices to have a certificate, but she does want to require mutual authentication. Which EAP protocol should she use?",
    choices: ["EAP-FAST", "EAP-TTLS", "PEAP", "EAP-TLS"],
    answer: "C",
    explanation: "Isabelle should select PEAP, which doesn't require client certificates but does provide TLS support. EAP-TTLS provides similar functionality but requires additional software to be installed on some devices. EAP-FAST focuses on quick reauthentication, and EAP-TLS requires certificates to be deployed to the endpoint devices."
  },
  {
    question: "Theresa has implemented a technology that keeps data for personal use separate from data for her company on mobile devices used by members of her staff. What is this concept called?",
    choices: ["Storage segmentation", "Multifactor storage", "Full-device encryption", "Geofencing"],
    answer: "A",
    explanation: "Storage segmentation is the concept of splitting storage between functions or usage to ensure that information that fits a specific context is not shared or used by applications or services outside of that context. Full-device encryption encrypts the entire device, geofencing is used to determine geographic areas where actions or events may be taken by software, and multifactor storage was made up for this question."
  },
  {
    question: "A member of Jake's team tells him that he sideloaded applications on his Android-based company owned phone. What has occurred?",
    choices: ["Malware was installed on the phone.", "The phone was rooted to allow administrative access.", "Applications were installed by copying them instead of via an app store.", "The organization's MDM was disabled to avoid its management controls."],
    answer: "C",
    explanation: "Sideloading is the process of copying files between two devices like a phone and a laptop, desktop, or storage device. Jake's team member has loaded an application without using the Android application store. Sideloading does not necessarily imply malware, rooting, or disabling an MDM, although an MDM may be configured to prevent sideloading."
  },
  {
    question: "Madhuri disables SMS, MMS, and RCS on phones in her organization. What has she prevented from being sent?",
    choices: ["Phone calls and texts", "Text messages and multimedia messages", "Text messages and firmware updates", "Phone calls and multimedia messages"],
    answer: "B",
    explanation: "SMS (Short Message Service) is used to send text messages, and MMS and RCS provide additional multimedia features. Neither provides phone calls or firmware updates."
  },
  {
    question: "What is the most frequent concern that leads to GPS tagging being disabled by some companies via an MDM tool?",
    choices: ["Chain of custody", "The ability to support geofencing", "Privacy", "Context-aware authentication"],
    answer: "C",
    explanation: "Geotagging places a location stamp in documents and pictures that can include position, time, and date. This can be a serious privacy issue when pictures or other information are posted, and many individuals and organizations disable GPS tagging. Organizations may want to enforce GPS tagging for some work products, meaning that the ability to enable or disable it in an MDM tool is quite useful."
  },
  {
    question: "Bart wants to use a cellular hotspot to provide Internet connectivity via Wi-Fi. What type of network has he set up for his laptop and phone to connect to?",
    choices: ["Ad-hoc", "NFC", "Point-to-point", "RFID"],
    answer: "A",
    explanation: "This is an ad-hoc network set up to allow devices to connect to the access point provided by the cellular modem. NFC is a short range, low bandwidth connection method used for payments and similar purposes. Point-to-point connections are used to bridge two networks together or for single connections; this is a multi-device network. RFID uses tags and readers."
  },
  {
    question: "Susan wants to ensure that the threat of a lost phone creating a data breach is minimized. What two technologies should she implement to do this?",
    choices: ["Wi-Fi and NFC", "Remote wipe and FDE", "Containerization and NFC", "Geofencing and remote wipe"],
    answer: "B",
    explanation: "Susan's best options are to use a combination of full-device encryption (FDE) and remote wipe. If a device is stolen and continues to be connected to the cellular network, or reconnects at any point, the remote wipe will occur. If it does not, or if attackers attempt to get data from the device and it is locked, the encryption will significantly decrease the likelihood of the data being accessed."
  },
  {
    question: "What are the two most commonly deployed biometric authentication solutions for mobile devices?",
    choices: ["Voice recognition and face recognition", "Fingerprint recognition and gait recognition", "Face recognition and fingerprint recognition", "Voice recognition and fingerprint recognition"],
    answer: "C",
    explanation: "Current mobile device implementations have focused heavily on facial recognition via services like Apple's Face ID and fingerprint recognition like Android's fingerprint scanning and Apple's Touch ID. Gait recognition is not a widely deployed biometric technology and would be difficult for most mobile device users to use. Voice recognition as a biometric authenticator has not been broadly deployed for mobile devices."
  },
  {
    question: "Alaina wants to modify operating system settings and features on her iOS device and to install applications that are not permitted or available via the Apple App Store. What would she need to do to accomplish this?",
    choices: ["Deploy an MDM tool to the phone.", "Jailbreak the phone.", "Keymod the phone.", "Install a third-party operating system."],
    answer: "B",
    explanation: "Jailbreaking will allow Alaina to obtain administrator access to the underlying phone operating system and to modify operating system settings and options as well as to install applications that are not available via the App Store. Deploying an MDM does not permit all of this, keymodding is not a term used in this context, and installing a third-party OS would allow access but would change the OS."
  },
  {
    question: "Jerome wants to allow guests to use his organization's wireless network, but he does not want to provide a preshared key. What solution can he deploy to gather information such as email addresses or other contact information before allowing users to access his open network?",
    choices: ["WPS capture mode", "Kerberos", "WPA2", "A captive portal"],
    answer: "D",
    explanation: "Jerome should deploy a captive portal that requires users to provide information before being moved to a network segment that allows Internet access. WPS capture mode was made up for this question, Kerberos is used for enterprise authentication, and WPA2 supports open, enterprise, or PSK modes but does not provide the capability Jerome needs by itself."
  },
  {
    question: "Amanda wants to create a view of her buildings that shows Wi-Fi signal strength and coverage. What is this type of view called?",
    choices: ["A channel overlay", "A PSK", "A heatmap", "A SSID chart"],
    answer: "C",
    explanation: "Amanda wants to create a heatmap, which shows the signal strength and coverage for each access point in a facility. Heatmaps can also be used to physically locate an access point by finding the approximate center of the signal. This can be useful to locate rogue access points and other unexpected or undesired wireless devices."
  },
  {
    question: "Megan wants to prevent access to phones that are misplaced by members of her organization. Which of the following MDM control options is least likely to help her protect phones that are misplaced?",
    choices: ["PINs", "Device encryption", "Remote wipe", "Application management"],
    answer: "D",
    explanation: "Managing applications won't help protect a misplaced phone from being accessed. PINs, device encryption, and remote wipe will all help keep her organization's data and devices secure."
  },
  {
    question: "Gurvinder wants to select a mobile device deployment method that provides employees with devices that they can use as though they're personally owned to maximize flexibility and ease of use. Which deployment model should he select?",
    choices: ["CYOD", "COPE", "BYOD", "MOTD"],
    answer: "B",
    explanation: "Gurvinder's requirements fit the COPE (corporate-owned, personally enabled) mobile device deployment model. Choose your own device (CYOD) allows users to choose a device but then centrally manages it. BYOD allows users to use their own device, rather than have the company provide it, and MOTD means message of the day, and is not a mobile device deployment scheme."
  },
  {
    question: "Octavia discovers that the contact list from her phone has been acquired via a wireless attack. Which of the following is the most likely culprit?",
    choices: ["Bluejacking", "An evil maid", "Bluesnarfing", "An evil twin"],
    answer: "C",
    explanation: "Bluesnarfing is the theft of information from a Bluetooth-enabled device. If Octavia left Bluetooth on and had not properly secured her device, then an attacker may have been able to access her contact list and download its contents. A bluejacking attack occurs when unwanted messages are sent to a device via Bluetooth. Evil twins are malicious access points configured to appear to be legitimate access points, and an evil maid attack is an in-person attack where an attacker takes advantage of physical access to hardware to acquire information or to insert malicious software on a device."
  },
  
  // Chapter 14: Monitoring and Incident Response
{
    question: "The following figure shows the Security+ incident response cycle. What item is missing?",
    image: "/images/incident-response-cycle.png",
    choices: ["Planning", "Reporting", "Monitoring", "Preparation"],
    answer: "D",
    explanation: "The first item in the incident response cycle used by the Security+ exam is preparation.",
  },  
  {
    question: "Michael analyzes network traffic, including packet content, as part of his incident response process. What tool should he use?",
    choices: ["Syslog", "NetFlow", "Packet capture", "A SIEM"],
    answer: "C",
    explanation: "Packet capture will allow Michael to see all the content of packets that are captured to analyze them. NetFlow simply shows source, destination, protocol, and traffic volume. Syslog and a SIEM don't capture packet content, and instead focus on logs and events."
  },
  {
    question: "Susan wants to create a dashboard that shows her aggregated log events related to logins from different geographic regions. Her goal is to identify impossible travel scenarios. Which of the following solutions should she select to accomplish that goal?",
    choices: ["IPS", "OS logs", "SIEM", "Vulnerability scan data"],
    answer: "C",
    explanation: "A SIEM with correlation rules for geographic IP information as well as user IDs and authentication events will accomplish Susan's goals. An IPS may detect attacks, but it isn't well suited to detecting impossible travel. OS logs would need to be aggregated, and vulnerability scan data won't show this at all."
  },
  {
    question: "Selah wants to ensure that users in her organization can only install applications that are evaluated and approved by the organization's security team. What should she use?",
    choices: ["A SIEM", "An application deny list", "An application allow list", "sFlow"],
    answer: "C",
    explanation: "Application allow lists are used to ensure that only allowed applications are installable on systems. A deny list specifically identifies programs that aren't allowed. A SIEM doesn't provide application management capabilities, and sFlow is a flow tool like NetFlow."
  },
  {
    question: "What is the primary concern with sFlow in a large, busy network?",
    choices: [
      "It may allow buffer overflow attacks against the collector host.",
      "sFlow is not designed for large or complex networks.",
      "sFlow puts extreme load on the flow collector host.",
      "sFlow samples only network traffic, meaning that some detail will be lost."
    ],
    answer: "D",
    explanation: "The primary concern for analysts who deploy sFlow is often that it samples only data, meaning some accuracy and nuance can be lost in the collection of flow data. Sampling, as well as the implementation methods for sFlow, means that it scales well to handle complex and busy networks. Although vulnerabilities may exist in sFlow collectors, a buffer overflow is not a primary concern for them."
  },
  {
    question: "Mark unplugs the network connection from a system that is part of an incident and places tape over its Ethernet jack with a sign that says, “Do not reconnect without approval from IR team.” How is this method best described?",
    choices: ["Containment", "Isolation", "Segmentation", "Zoning"],
    answer: "B",
    explanation: "Mark has isolated the system by removing it from the network and ensuring that it cannot communicate with other systems. Containment would limit the impact of the incident and might leave the system connected but with restricted or protected access. Segmentation moves systems or groups of systems into zones that have similar purposes, data classification, or other restrictions on them."
  },
  {
    question: "The company that Ben works for wants to test its incident response plan. Ben gathers the incident response team in a room and walks through a scenario to validate the organization's processes and procedures. What type of event has Ben hosted?",
    choices: ["A checklist exercise", "A simulation", "A tabletop exercise", "A fail-over exercise"],
    answer: "C",
    explanation: "Ben's organization is conducting a tabletop exercise. Tabletop exercises are conducted with more flexibility—team members are given a scenario and asked how they would respond and what they would do to accomplish tasks they believe would be relevant. Checklist exercises are not a specific type of exercise. A simulation exercise attempts to more fully re-create an actual incident to test responses. Fail-over exercises are conducted by actually failing a datacenter over to a hot location."
  },
  {
    question: "Madhuri wants to check a PNG-formatted photo for GPS coordinates. Where can she find that information if it exists in the photo?",
    choices: ["In the location.txt file appended to the PNG", "On the original camera", "In the photo's metadata", "In the photo as a steganographically embedded data field"],
    answer: "C",
    explanation: "If the photo includes GPS data, it will be included in the photo's metadata. Madhuri can use a tool like ExifTool to review the metadata for useful information. None of the other options are places where data is stored for a PNG image as a normal practice."
  },
  {
    question: "Alyssa has identified malware on a system. She removes the system from the network to ensure that it cannot impact other systems. What technique has she used to deal with this system?",
    choices: ["Quarantine", "Segmentation", "Converted it to agentless", "Deny listing"],
    answer: "A",
    explanation: "Alyssa's has quarantined the machine, ensuring it cannot reach other systems or impact the rest of her organization. Segmentation would involve putting the system in protected network zone. Agentless tools are used to send data without a separate program or agent deployed to allow that. Deny lists are used to prevent specific programs or files from being used or deployed to systems."
  },
  {
    question: "Kristen discovers missing logs as part of her threat hunting activities. What has most likely happened?",
    choices: [
      "The logs hit the end of their life cycle and were rotated.",
      "The system is a newly deployed system.",
      "An attacker wiped the logs to hide evidence.",
      "An attacker encrypted the logs as part of their process."
    ],
    answer: "C",
    explanation: "Missing logs are often associated with an attacker attempting to hide evidence of their actions. Log rotation will typically remove the oldest log items and replace them with new log items rather than wiping a log, or will archive the old log file and create a new one. A newly deployed system typically has at least some logs from booting and running. Encrypting logs would leave a file in place even if it couldn't be read."
  },
  {
    question: "Ian has been receiving hundreds of false positive alerts from his SIEM every night when scheduled jobs run across his datacenter. What should he adjust on his SIEM to reduce the false positive rate?",
    choices: ["Trend analysis", "Sensitivity", "Correlation rules", "Dashboard configuration"],
    answer: "B",
    explanation: "Ian's first step should be changing the sensitivity for his alerts. Adjusting the alerts to ignore safe or expected events can help reduce false positives. Correlation rules may then need to be adjusted if they are matching unrelated items. Dashboards are used to visualize data, not for alerting, and trend analysis is used to feed dashboards and reports."
},
{
    question: "Which team member acts as a primary conduit to senior management on an IR team?",
    choices: ["Communications and public relations", "Information security", "Management", "Technical expert"],
    answer: "C",
    explanation: "Members of management or organizational leadership act as a primary conduit to senior leadership for most incident response teams. They also ensure that difficult or urgent decisions can be made without needing escalated authority. Communications and PR staff focus on internal and external communications but are typically not the direct conduit to leadership. Technical and information security experts do most of the incident response work itself."
  },
  {
    question: "Dana is reviewing her system's application logs and notices that a full backup of the application was done at 10 a.m. She knows that the job that runs the backup process is set to run overnight. What indicator should she flag this as?",
    choices: ["Unexpected logs", "Resource consumption", "Resource inaccessibility", "Out-of-cycle logging"],
    answer: "D",
    explanation: "This is an example of out-of-cycle logging, or logging that occurs at a different time than expected. This may be because an attacker is using the backup tool to acquire data. Unexpected logs are not an indicator found on the Security+ exam outline. There is no indication of resource consumption or inaccessibility in the question."
  },
  {
    question: "Jim wants to view log entries that describe actions taken by applications on a Red Hat Linux system. Which of the following tools can he use on the system to view those logs?",
    choices: ["logger", "syslog-ng", "journalctl", "tail"],
    answer: "C",
    explanation: "Red Hat Enterprise uses journalctl to view journal logs that contain application information. Jim should use journalctl to review the logs for the information he needs. The tool also provides functionality that replicates what head and tail can do for logs. Syslog-ng is a logging infrastructure, and though logs may be sent via syslog-ng, it is not mentioned here. logger is a logging utility used to make entries in the system log."
  },
  {
    question: "Megan wants to ensure that logging is properly configured for her organization's Windows workstations. What could she use to ensure that logging best practices are configured?",
    choices: ["SIEM", "Benchmarks", "Syslog", "Agents"],
    answer: "B",
    explanation: "Benchmarks often include logging settings and configurations. SIEM is used to gather and analyze logs. Syslog is a standard for logging and sending logs. Agents are used to send logs for systems that don't have a logging capability."
  },
  {
    question: "Chris has turned on logon auditing for a Windows system. Which log will show them?",
    choices: ["The Windows Application log", "The Windows Security log", "The Windows System log", "All of the above"],
    answer: "B",
    explanation: "The Windows Security log records logon events when logon auditing is enabled. The Application and System logs do not contain these events."
  },
  {
    question: "Jayne wants to determine why a ransomware attack was successful against her organization. She plans to conduct a root cause analysis. Which of the following is not a typical root cause analysis method?",
    choices: ["Root/branch review", "Five whys", "Event analysis", "Diagramming"],
    answer: "A",
    explanation: "Five whys, event analysis, and diagramming are all common methods of performing root cause analysis. Root/branch review is not a typical process for this."
  },
  {
    question: "Hitesh wants to keep a system online but limit the impact of the malware that was found on it while an investigation occurs. What method from the following list should he use?",
    choices: ["Containment", "Isolation", "Segmentation", "Black holing"],
    answer: "A",
    explanation: "Containment activities focus on preventing further malicious actions or attacks. In this case, Hitesh might opt to prevent the malware from spreading but leave the system online due to a critical need or a desire to preserve memory and other artifacts for investigation. Isolation walls a system or systems off from the rest of the world, whereas segmentation is frequently used before incidents occur to create zones or segments of a network or system with different security levels and purposes."
  },
  {
    question: "What phase in the incident response process leverages indicators of compromise and log analysis as part of a review of events?",
    choices: ["Preparation", "Containment", "Eradication", "Identification"],
    answer: "D",
    explanation: "The Analysis phase focuses on using various techniques to analyze events to identify potential incidents. Preparation focuses on building tools, processes, and procedures to respond to incidents. Eradication involves the removal of artifacts related to the incident, and containment limits the scope and impact of the incident."
  },
  {
    question: "Henry wants to check to see if services were installed by an attacker. What commonly gathered organizational data can he use to see if a new service appeared on systems?",
    choices: ["Registry dumps from systems throughout his organization", "Firewall logs", "Vulnerability scans", "Flow logs"],
    answer: "C",
    explanation: "Vulnerability scans are the best way to find new services that are offered by systems. In fact, many vulnerability scanners will flag new services when they appear, allowing administrators to quickly notice unexpected new services. Registry information is not regularly dumped or collected in most organizations. Firewall logs and flow logs could show information about the services being used by systems whose traffic passes through them, but this is a less useful and accurate way of identifying new services and would work only if those services were also being used."
  },
  
  ];  