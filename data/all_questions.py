questions = [
    {
        "question": "What does the 'C' in the CIA triad stand for?",
        "choices": ["Control", "Cryptography", "Confidentiality", "Configuration"],
        "answer": "C"
    },
    {
        "question": "What is the primary goal of nonrepudiation?",
        "choices": ["Ensure data availability", "Prevent data modification", "Ensure that someone cannot deny an action", "Encrypt sensitive information"],
        "answer": "C"
    },
    {
        "question": "Which of the following is NOT part of the DAD triad?",
        "choices": ["Disclosure", "Availability", "Alteration", "Denial"],
        "answer": "B"
    },
    {
        "question": "Which type of risk describes the potential for an organization to lose public trust due to a breach?",
        "choices": ["Strategic", "Compliance", "Reputational", "Financial"],
        "answer": "C"
    },
    {
        "question": "What risk is associated with failure to follow laws like HIPAA or GDPR?",
        "choices": ["Operational", "Compliance", "Reputational", "Financial"],
        "answer": "B"
    },
    {
        "question": "Which one of the following is not considered a threat actor?",
        "choices": ["Nation-states", "Hacktivists", "Insider threats", "Encryption algorithms"],
        "answer": "D"
    },
    {
        "question": "What is a characteristic of a nation-state threat actor?",
        "choices": ["Low funding", "Little coordination", "Espionage capability", "Internal-only threats"],
        "answer": "C"
    },
    {
        "question": "What motivates hacktivists?",
        "choices": ["Money", "Corporate gain", "Political causes", "Personal revenge"],
        "answer": "C"
    },
    {
        "question": "What is the most common insider threat?",
        "choices": ["External vendor attack", "Disgruntled employee", "System glitch", "Overprivileged administrator"],
        "answer": "B"
    },
    {
        "question": "What is a threat vector?",
        "choices": ["An asset being protected", "A vulnerability being patched", "A path used to exploit", "A detection system"],
        "answer": "C"
    },
    {
        "question": "What does threat intelligence aim to do?",
        "choices": ["Eliminate attackers", "Block internet access", "Provide information about threats", "Disable encryption"],
        "answer": "C"
    },
    {
        "question": "Which of the following is an example of open-source threat intelligence?",
        "choices": ["Internal ticket system", "Commercial vendor reports", "NVD database", "Government notice"],
        "answer": "C"
    },
    {
        "question": "What is the most likely impact of a zero-day vulnerability?",
        "choices": ["Slow network", "Patch downtime", "Widespread compromise", "Power outage"],
        "answer": "C"
    },
    {
        "question": "Which term best describes the misuse of legitimate credentials?",
        "choices": ["Privilege escalation", "Credential stuffing", "Data exfiltration", "Abuse of valid accounts"],
        "answer": "D"
    },
    {
        "question": "Ryan wants to prevent logic bombs created by insider threats from impacting his organization. What technique will most effectively limit the likelihood of logic bombs being put in place?",
        "choices": ["Deploying antivirus software", "Using a code review process", "Deploying endpoint detection and response (EDR) software", "Disabling autorun for USB drives"],
        "answer": "B"
    },
    {
        "question": "Yasmine believes that her organization may be dealing with an advanced rootkit and wants to write IoC definitions for it. Which of the following is not likely to be a useful IoC for a rootkit?",
        "choices": ["File hashes", "Command and control domains", "Pop-ups demanding a ransom", "Behavior-based identifiers"],
        "answer": "C"
    },
    {
        "question": "Nathan notices grade changes on a staff account the user says they didn’t make. What is the most likely way a student accessed their password?",
        "choices": ["A keylogger", "A rootkit", "Spyware", "A logic bomb"],
        "answer": "A"
    },
    {
        "question": "Amanda notices traffic to a malicious host on TCP port 6667. What is she most likely detecting?",
        "choices": ["Command and control", "Spyware", "A worm", "A hijacked web browser"],
        "answer": "A"
    },
    {
        "question": "What type of malware allows remote access and is often found left behind by attackers?",
        "choices": ["A worm", "Crypto malware", "A trojan", "A backdoor"],
        "answer": "D"
    },
    {
        "question": "What is the primary impact of bloatware?",
        "choices": ["Consuming resources", "Logging keystrokes", "Providing information to third parties", "Allowing unauthorized remote access"],
        "answer": "A"
    },
        {
        "question": "What type of malware is designed to gather info about user activity?",
        "choices": ["A Trojan", "Bloatware", "Spyware", "A rootkit"],
        "answer": "C"
    },
    {
        "question": "Matt receives multiple names for the same malware sample from different scanners. What happened?",
        "choices": ["The package contains more than one malware", "The service is misconfigured", "It's a worm in disguise", "Vendors use different names"],
        "answer": "D"
    },
    {
        "question": "Nancy is concerned about what a keylogger might have captured. What should she worry about?",
        "choices": ["Files on the system", "Mouse activity only", "Any user input", "Only login credentials"],
        "answer": "C"
    },
    {
        "question": "Which type of malware typically encrypts files and demands payment to restore access?",
        "choices": ["Worm", "Virus", "Ransomware", "Rootkit"],
        "answer": "C"
    },
    {
        "question": "Joseph receives an email notifying him to change his password. The email links to amaz0n.com. What kind of attack is this?",
        "choices": ["Typosquatting", "Phishing", "Smishing", "A watering hole attack"],
        "answer": "A"
    },
    {
        "question": "Combining phishing with voicemail is known as:",
        "choices": ["Whaling", "Spoofing", "Spooning", "Vishing"],
        "answer": "D"
    },
    {
        "question": "Michele finds SSH login attempts using the username 'admin' and simple passwords. What type of attack is this?",
        "choices": ["A brute-force attack", "Shoulder surfing", "An on-path attack", "Pretexting"],
        "answer": "A"
    },
    {
        "question": "What detection rule helps identify password spraying attacks?",
        "choices": [
            "Match attempts using same username/password across systems",
            "Match multiple attempts on the same account with different passwords",
            "Match repeated use of the same password for different usernames",
            "Match slightly modified passwords for the same account"
        ],
        "answer": "C"
    },
    {
        "question": "Susan investigates a vendor invoice that came from an unusual email and asked for PayPal payment. What type of attack is this?",
        "choices": ["Smishing", "Business email compromise", "Disinformation", "Typosquatting"],
        "answer": "B"
    },
    {
        "question": "Selah infects ads on a site visited by her target company. What kind of attack is this?",
        "choices": ["A watering hole attack", "Vishing", "Whaling", "Typosquatting"],
        "answer": "A"
    },
    {
        "question": "Ben wants to detect brute-force password attacks. Which log detail is least useful?",
        "choices": ["Source IP address or hostname", "Failed login logs", "The password that was used for each attempt", "Geographic location of the system"],
        "answer": "D"
    },
    {
        "question": "Melissa gets a call claiming a manager needs gift cards immediately. She sends them. What happened?",
        "choices": ["Phishing", "Pretexting", "Business email compromise", "Carding"],
        "answer": "B"
    },
    {
        "question": "What’s the best indicator of password spraying?",
        "choices": ["The time login attempts occurred", "Passwords used in failed attempts", "Source IP address", "Number of failed attempts per user"],
        "answer": "B"
    },
    {
        "question": "Which human vector is most associated with nation-state actors?",
        "choices": ["Misinformation campaigns", "Watering hole attacks", "Business email compromise", "Password spraying"],
        "answer": "A"
    },
    {
        "question": "Nicole mistypes a URL and ends up on a malicious site. What is this called?",
        "choices": ["DNS hijacking", "Pharming", "Typosquatting", "Hosts file compromise"],
        "answer": "C"
    },
    {
        "question": "Devon sets up malware on a popular site during a pen test. What is he using?",
        "choices": ["Pretexting", "A watering hole attack", "Typosquatting", "Brand impersonation"],
        "answer": "B"
    },
    {
        "question": "Which one of the following security assessment techniques assumes that an organization has already been compromised and searches for evidence of that compromise?",
        "choices": ["Vulnerability scanning", "Penetration testing", "Threat hunting", "War driving"],
        "answer": "C"
    },
    {
        "question": "Renee is configuring her vulnerability management solution to perform credentialed scans of servers on her network. What type of account should she provide to the scanner?",
        "choices": ["Domain administrator", "Local administrator", "Root", "Read-only"],
        "answer": "D"
    },
    {
        "question": "Ryan is planning to conduct a vulnerability scan of a business-critical system using dangerous plug-ins. What would be the best approach for the initial scan?",
        "choices": ["Run the scan against production systems", "Run the scan during business hours", "Run the scan in a test environment", "Do not run the scan"],
        "answer": "C"
    },
    {
        "question": "Which one of the following values for the CVSS attack complexity metric would indicate that the specified attack is simplest to exploit?",
        "choices": ["High", "Medium", "Low", "Severe"],
        "answer": "C"
    },
    {
        "question": "Tara found a vulnerability flagged by a scanner that did not exist. What type of error occurred?",
        "choices": ["False positive", "False negative", "True positive", "True negative"],
        "answer": "A"
    },
    {
        "question": "Brian discovered a flaw that would allow students to alter their grades using SQL injection. What type of control should he recommend?",
        "choices": ["Confidentiality", "Integrity", "Alteration", "Availability"],
        "answer": "B"
    },
    {
        "question": "Which tool is least likely to be used during the reconnaissance phase of a penetration test?",
        "choices": ["Nmap", "Nessus", "Metasploit", "Nslookup"],
        "answer": "C"
    },
    {
        "question": "Brian found a vulnerability in a system that should have been patched. What control would address this?",
        "choices": ["Patch management", "File integrity monitoring", "Intrusion detection", "Threat hunting"],
        "answer": "A"
    },
    {
        "question": "Which tool is most likely to detect an XSS vulnerability?",
        "choices": ["Static application test", "Web application vulnerability scanner", "Intrusion detection system", "Network vulnerability scanner"],
        "answer": "B"
    },
    {
        "question": "During a penetration test, Patrick used a compromised system to gain access to others. What is this called?",
        "choices": ["Lateral movement", "Privilege escalation", "Footprinting", "OSINT"],
        "answer": "A"
    }
        {
        "question": "Which tool is most likely to detect an XSS vulnerability?",
        "choices": ["Static application test", "Web application vulnerability scanner", "Intrusion detection system", "Network vulnerability scanner"],
        "answer": "B"
    },
    {
        "question": "Adam is conducting software testing by reviewing the source code of the application. What type of code testing is Adam conducting?",
        "choices": ["Mutation testing", "Static code analysis", "Dynamic code analysis", "Fuzzing"],
        "answer": "B"
    },
    {
        "question": "Charles is worried about users conducting SQL injection attacks. Which of the following solutions will best address his concerns?",
        "choices": ["Using secure session management", "Enabling logging on the database", "Performing user input validation", "Implementing TLS"],
        "answer": "C"
    },
    {
        "question": "Precompiled SQL statements that only require variables to be input are an example of what type of application security control?",
        "choices": ["Parameterized queries", "Encoding data", "Input validation", "Appropriate access controls"],
        "answer": "A"
    },
    {
        "question": "During a web application test, Ben discovers that the application shows SQL code as part of an error provided to application users. What should he note in his report?",
        "choices": ["Improper error handling", "Code exposure", "SQL injection", "A default configuration issue"],
        "answer": "A"
    },
    {
        "question": "Charles discovers an issue in which multiple operations cause undesirable results due to their order of completion. What is this issue called?",
        "choices": ["Race condition", "De-referencing", "Insecure function", "Improper error handling"],
        "answer": "A"
    },
    {
        "question": "Which application security control would help ensure that inputs do not contain malicious data?",
        "choices": ["Code signing", "Input validation", "Static analysis", "Fuzzing"],
        "answer": "B"
    },
    {
        "question": "Which of the following testing types involves executing the application in a live environment?",
        "choices": ["Static code analysis", "Mutation testing", "Dynamic code analysis", "Code signing"],
        "answer": "C"
    },
    {
        "question": "A developer wants to ensure users can confirm the origin of application code. What should they implement?",
        "choices": ["Code review", "Sandboxing", "Code signing", "Static testing"],
        "answer": "C"
    },
    {
        "question": "What process helps isolate untrusted code so that it cannot impact production systems?",
        "choices": ["Input validation", "Code signing", "Sandboxing", "Error handling"],
        "answer": "C"
    },
    {
        "question": "Which benefit of automation directly helps scale operations securely?",
        "choices": ["Guard rails", "Enforcing baselines", "Standard configurations", "Security groups"],
        "answer": "B"
    },
    {
        "question": "What is the primary goal of PKI?",
        "choices": ["Authentication", "Encryption", "Hashing", "Nonrepudiation"],
        "answer": "A"
    },
    {
        "question": "Which cryptographic method is used to verify the integrity of data?",
        "choices": ["Hashing", "Encryption", "Salting", "Key exchange"],
        "answer": "A"
    },
    {
        "question": "What type of cryptographic key is used in symmetric encryption?",
        "choices": ["Public key", "Private key", "Shared key", "Hash key"],
        "answer": "C"
    },
    {
        "question": "What distinguishes asymmetric from symmetric encryption?",
        "choices": ["Speed", "Single key usage", "Different keys for encryption and decryption", "Hashing support"],
        "answer": "C"
    },
    {
        "question": "Which standard defines secure email using public key encryption?",
        "choices": ["SSL", "TLS", "S/MIME", "SSH"],
        "answer": "C"
    },
    {
        "question": "What does a digital signature provide?",
        "choices": ["Availability", "Redundancy", "Integrity and nonrepudiation", "Confidentiality and encryption"],
        "answer": "C"
    },
    {
        "question": "Which key is used to verify a digital signature?",
        "choices": ["Symmetric key", "Private key", "Public key", "Hash key"],
        "answer": "C"
    },
    {
        "question": "Which of the following is the best way to ensure a key pair remains secure?",
        "choices": ["Use the same password for all systems", "Only share the private key with trusted partners", "Store private keys securely and never share them", "Encrypt the public key"],
        "answer": "C"
    },
    {
        "question": "Which method ensures that data has not been modified in transit?",
        "choices": ["Encryption", "Authentication", "Hashing", "Public key infrastructure"],
        "answer": "C"
    }
        {
        "question": "What does SSO stand for in identity management?",
        "choices": ["Single-source origin", "Synchronized security operations", "Single sign-on", "Secure server operations"],
        "answer": "C"
    },
    {
        "question": "Which factor category includes something you are?",
        "choices": ["Knowledge", "Possession", "Biometric", "Location"],
        "answer": "C"
    },
    {
        "question": "Which authentication method uses a password and a code sent to a smartphone?",
        "choices": ["Two-factor authentication", "Single sign-on", "Biometric identification", "Mutual authentication"],
        "answer": "A"
    },
    {
        "question": "Which access control model is based on predefined roles in an organization?",
        "choices": ["MAC", "DAC", "RBAC", "ABAC"],
        "answer": "C"
    },
    {
        "question": "What principle ensures that users are only given the permissions they need to do their job?",
        "choices": ["Separation of duties", "Least privilege", "Job rotation", "Mandatory vacation"],
        "answer": "B"
    },
    {
        "question": "Which identity federation protocol is commonly used to allow SSO between companies and cloud services?",
        "choices": ["LDAP", "SAML", "TLS", "IMAP"],
        "answer": "B"
    },
    {
        "question": "What is a major benefit of implementing MFA?",
        "choices": ["Faster logins", "Improved encryption", "Enhanced authentication security", "Automatic password resets"],
        "answer": "C"
    },
    {
        "question": "Which of the following is a time-based one-time password algorithm?",
        "choices": ["LDAP", "TOTP", "SAML", "RADIUS"],
        "answer": "B"
    },
    {
        "question": "In access control, what is the purpose of logging?",
        "choices": ["To grant access", "To monitor and audit activity", "To reset permissions", "To authenticate users"],
        "answer": "B"
    },
    {
        "question": "What is the main purpose of an identity provider (IdP)?",
        "choices": ["Storing passwords", "Managing VPN access", "Authenticating users for multiple systems", "Enforcing password complexity"],
        "answer": "C"
    },
    {
        "question": "Which access control model allows the owner of a file to set permissions?",
        "choices": ["MAC", "DAC", "RBAC", "ABAC"],
        "answer": "B"
    },
    {
        "question": "What does a RADIUS server typically provide?",
        "choices": ["Role-based authentication", "Centralized AAA services", "Key generation", "Digital certificates"],
        "answer": "B"
    },
    {
        "question": "What access control concept involves rotating job roles among employees?",
        "choices": ["Least privilege", "Separation of duties", "Job rotation", "Mandatory access control"],
        "answer": "C"
    },
    {
        "question": "What term refers to verifying that a claimed identity is valid?",
        "choices": ["Authorization", "Accounting", "Identification", "Authentication"],
        "answer": "D"
    },
    {
        "question": "What is the main goal of implementing conditional access policies?",
        "choices": ["Limit access by time zone", "Provide open access from any device", "Enforce restrictions based on context", "Force reauthentication hourly"],
        "answer": "C"
    },
    {
        "question": "What is LDAP primarily used for?",
        "choices": ["Token generation", "Authentication and directory lookups", "Time synchronization", "Secure email"],
        "answer": "B"
    },
    {
        "question": "Which of the following would most likely be considered a 'possession' factor?",
        "choices": ["Fingerprint", "Password", "Security badge", "Facial recognition"],
        "answer": "C"
    },
    {
        "question": "What security concern does biometric authentication help reduce?",
        "choices": ["Brute-force attacks", "Social engineering", "Phishing", "Password reuse"],
        "answer": "D"
    },
    {
        "question": "What is a primary risk of using biometric authentication?",
        "choices": ["Users forgetting patterns", "Slow response time", "Privacy and data leakage", "Token expiration"],
        "answer": "C"
    },
    {
        "question": "What type of control is account lockout after failed login attempts?",
        "choices": ["Technical", "Physical", "Administrative", "Organizational"],
        "answer": "A"
    }
        {
        "question": "Mike wants to stop vehicles from traveling toward the entrance of his building. What physical security control should he implement?",
        "choices": ["An air gap", "A hot aisle", "A robotic sentry", "A bollard"],
        "answer": "D"
    },
    {
        "question": "Alecia wants to ensure that her backups cannot be accessed by third parties while stored in an offsite storage location. What should she do to secure her backups?",
        "choices": ["Hash the backup data", "Avoid the use of offsite storage locations", "Employ security guards", "Encrypt the backup data"],
        "answer": "D"
    },
    {
        "question": "Fred wants to be able to recover his database transactions at any point in time if a physical disaster occurs involving his datacenter. His organization uses daily backups. What additional solution should he select to support this need?",
        "choices": ["Onsite journaling", "Onsite snapshots", "Offsite journaling", "Offsite snapshots"],
        "answer": "C"
    },
    {
        "question": "Ellen is concerned about her company’s resilience and wants to ensure it can handle either changing loads or support disaster recovery and business continuity efforts. What should she focus on?",
        "choices": ["RAID levels", "Power and UPS", "Incremental backups", "People, technology, and infrastructure"],
        "answer": "D"
    },
    {
        "question": "Madhuri has deployed a replication tool that copies data over to a secondary hot site in real time. What type of replication has she deployed?",
        "choices": ["Synchronous replication", "Asynchronous replication", "Snapshot replication", "Backup journaling"],
        "answer": "A"
    },
    {
        "question": "What factor is a major reason organizations do not use security guards?",
        "choices": ["Reliability", "Training", "Cost", "Social engineering"],
        "answer": "C"
    },
    {
        "question": "Megan wants to deploy a sensor that is inexpensive, yet will allow her to detect humans entering and moving in a secured room. What should she select?",
        "choices": ["Microwave sensor", "Ultrasonic sensor", "Pressure sensor", "Infrared sensor"],
        "answer": "D"
    },
    {
        "question": "Kathleen wants to discourage potential attackers from entering her facility. Which of the following is not a common control used for this type of preventive defense?",
        "choices": ["Fences", "Lighting", "Platform diversity", "Video surveillance"],
        "answer": "C"
    },
    {
        "question": "How does technology diversity help ensure cybersecurity resilience?",
        "choices": [
            "It ensures that a vulnerability in one vendor’s product won’t affect everything",
            "It eliminates all downtime",
            "It prevents human error",
            "It guarantees perfect uptime"
        ],
        "answer": "A"
    },
    {
        "question": "Scott sends his backups to a company that keeps them in a secure vault. What type of backup solution has he implemented?",
        "choices": ["Nearline", "Onsite", "Offsite", "Snapshot"],
        "answer": "C"
    },
    {
        "question": "Gabby wants to detect physical brute-force attempts against her organization. What solution is best suited to this?",
        "choices": ["Locks", "Security guards", "Access badges", "IDS"],
        "answer": "B"
    },
    {
        "question": "Florian wants to test his high-availability designs without interrupting work. Which is the least disruptive scenario?",
        "choices": ["Failover", "Simulation", "Tabletop", "Parallel processing"],
        "answer": "C"
    },
    {
        "question": "Which of the following best describes a cold site?",
        "choices": ["Fully equipped and live", "Ready for use with real-time replication", "Basic facility with no equipment", "A site used for malware testing"],
        "answer": "C"
    },
    {
        "question": "Which of these testing methods is most disruptive but provides full validation of recovery processes?",
        "choices": ["Tabletop", "Failover", "Simulation", "Parallel processing"],
        "answer": "B"
    },
    {
        "question": "Which of the following is a redundancy method used to support power resilience?",
        "choices": ["Snapshot replication", "Firewall clustering", "Uninterruptible power supply (UPS)", "Air gapping"],
        "answer": "C"
    },
    {
        "question": "Why would an organization use geographic diversity in site design?",
        "choices": [
            "To reduce bandwidth",
            "To lower energy costs",
            "To mitigate regional disasters",
            "To simplify authentication"
        ],
        "answer": "C"
    },
    {
        "question": "Which RAID level offers both redundancy and performance improvements?",
        "choices": ["RAID 0", "RAID 1", "RAID 5", "RAID 6"],
        "answer": "C"
    },
    {
        "question": "Which backup method captures all changes since the last full backup?",
        "choices": ["Incremental", "Differential", "Snapshot", "Real-time replication"],
        "answer": "B"
    },
    {
        "question": "Which type of physical access control uses two sets of doors to secure access?",
        "choices": ["Security guard", "Mantrap", "Airlock", "Badge reader"],
        "answer": "B"
    },
    {
        "question": "Which physical control is designed to block vehicles but allow foot traffic?",
        "choices": ["Turnstile", "Badge gate", "Bollard", "Fire gate"],
        "answer": "C"
    }
        {
        "question": "What is the primary difference between IaaS and PaaS?",
        "choices": ["PaaS provides networking, IaaS does not", "IaaS includes applications, PaaS includes OS only", "PaaS offers a development platform, IaaS offers infrastructure", "IaaS requires no management, PaaS does"],
        "answer": "C"
    },
    {
        "question": "Which cloud deployment model is owned and used by a single organization?",
        "choices": ["Public", "Community", "Hybrid", "Private"],
        "answer": "D"
    },
    {
        "question": "Which of the following models offers the most customer control over data and configurations?",
        "choices": ["SaaS", "PaaS", "IaaS", "XaaS"],
        "answer": "C"
    },
    {
        "question": "Which of the following is the most secure way to administer cloud infrastructure?",
        "choices": ["Using HTTP", "Using SSH with key pairs", "Using default admin credentials", "Through an open Wi-Fi connection"],
        "answer": "B"
    },
    {
        "question": "Which technology is commonly used to create isolated computing environments on a shared host?",
        "choices": ["Containers", "Cloud brokers", "Database sharding", "Quantum tunnels"],
        "answer": "A"
    },
    {
        "question": "What security concern does multi-tenancy primarily raise in cloud computing?",
        "choices": ["Service downtime", "Data separation and leakage", "Slow performance", "Increased logging"],
        "answer": "B"
    },
    {
        "question": "What is a hypervisor responsible for?",
        "choices": ["Monitoring cloud logs", "Securing web APIs", "Managing virtual machines", "Encrypting backup tapes"],
        "answer": "C"
    },
    {
        "question": "What is an advantage of virtualization from a cybersecurity standpoint?",
        "choices": ["No patching is needed", "Increased attack surface", "Easier sandboxing and isolation", "Reduced authentication needs"],
        "answer": "C"
    },
    {
        "question": "Which term describes the unauthorized use of cloud resources?",
        "choices": ["Shadow IT", "Cloud sprawl", "Cloud misconfiguration", "Service chaining"],
        "answer": "A"
    },
    {
        "question": "What is the term for uncontrolled growth of cloud instances and services?",
        "choices": ["Cloud drift", "Shadow sprawl", "Cloud sprawl", "Elastic overflow"],
        "answer": "C"
    },
    {
        "question": "What is the primary benefit of using infrastructure as code (IaC)?",
        "choices": ["It encrypts cloud storage", "It reduces zero-day exploits", "It automates and standardizes deployments", "It enhances biometric authentication"],
        "answer": "C"
    },
    {
        "question": "Which configuration management principle ensures that no manual changes are allowed?",
        "choices": ["Version drift", "Immutability", "Authentication", "Data integrity"],
        "answer": "B"
    },
    {
        "question": "Which of the following is a key risk of misconfigured storage buckets in the cloud?",
        "choices": ["Slow access", "Cost increase", "Unauthorized data exposure", "Loss of password complexity"],
        "answer": "C"
    },
    {
        "question": "Which cloud security concept refers to shared responsibility between provider and customer?",
        "choices": ["Zero trust", "Security fabric", "Security perimeter", "Shared responsibility model"],
        "answer": "D"
    },
    {
        "question": "Which strategy best protects against cloud misconfiguration?",
        "choices": ["Use of default credentials", "Manual policy reviews", "Automated configuration scanning tools", "Disabling logging"],
        "answer": "C"
    },
    {
        "question": "Which tool is most useful for ensuring proper encryption and policy compliance in cloud environments?",
        "choices": ["SIEM", "CASB", "WAF", "IDS"],
        "answer": "B"
    },
    {
        "question": "In virtualization, what separates each virtual machine's resources from another?",
        "choices": ["Role-based access", "Hypervisor layer", "Single-tenancy firewall", "Cloud shell"],
        "answer": "B"
    },
    {
        "question": "What benefit does containerization provide?",
        "choices": ["Improved authentication", "Isolated execution environments", "Faster physical backups", "Centralized email management"],
        "answer": "B"
    },
    {
        "question": "Which cloud model typically provides the least control over security features?",
        "choices": ["IaaS", "SaaS", "PaaS", "Hybrid"],
        "answer": "B"
    },
    {
        "question": "What is the primary function of a bastion host in cloud security?",
        "choices": ["Load balancing", "Public access to VPNs", "Secure administrative access", "Database performance testing"],
        "answer": "C"
    }
        {
        "question": "Which of the following provides baseline security configurations for operating systems and applications?",
        "choices": ["GPO", "Patch management", "Security templates", "Baseline hardening guides"],
        "answer": "D"
    },
    {
        "question": "Which of the following is a benefit of using a mobile device management (MDM) solution?",
        "choices": ["Enhanced file system performance", "User-friendly password creation", "Remote wipe and device control", "Faster internet access"],
        "answer": "C"
    },
    {
        "question": "Which endpoint security control blocks unauthorized software from executing?",
        "choices": ["Antivirus", "Firewalls", "Application allowlisting", "SIEM"],
        "answer": "C"
    },
    {
        "question": "What’s the best way to protect sensitive files stored on laptops?",
        "choices": ["Install antivirus", "Use file compression", "Encrypt the storage drive", "Enable auto-update"],
        "answer": "C"
    },
    {
        "question": "Which of the following describes a function of endpoint detection and response (EDR) systems?",
        "choices": ["Track patch versions", "Monitor endpoints for malicious behavior", "Reduce boot time", "Update device drivers"],
        "answer": "B"
    },
    {
        "question": "Which endpoint security technology isolates apps in a separate environment to reduce risk?",
        "choices": ["Sandboxing", "Heuristic scanning", "Patch management", "Tokenization"],
        "answer": "A"
    },
    {
        "question": "Which type of malware specifically targets mobile platforms via app stores?",
        "choices": ["Rootkits", "Spyware", "Trojanized apps", "Logic bombs"],
        "answer": "C"
    },
    {
        "question": "Which of the following is most effective for detecting file tampering on endpoints?",
        "choices": ["Antivirus", "Firewall", "File integrity monitoring", "EDR"],
        "answer": "C"
    },
    {
        "question": "Which of the following allows users to run applications in a self-contained, disposable environment?",
        "choices": ["Remote wipe", "Virtual desktop infrastructure (VDI)", "Mobile device management", "Root access"],
        "answer": "B"
    },
    {
        "question": "What is the primary goal of patch management?",
        "choices": ["Increase application speed", "Eliminate bloatware", "Fix security vulnerabilities", "Prevent rootkits"],
        "answer": "C"
    },
    {
        "question": "Which of the following actions can an MDM enforce to protect mobile data?",
        "choices": ["Install antivirus", "Wipe lost/stolen devices", "Restrict DNS lookup", "Disable GPS"],
        "answer": "B"
    },
    {
        "question": "What component of EDR is most responsible for identifying suspicious behavior patterns?",
        "choices": ["Firewall", "Heuristics engine", "Signature database", "Remote wipe agent"],
        "answer": "B"
    },
    {
        "question": "What is a key limitation of signature-based antivirus systems?",
        "choices": ["Cannot detect known malware", "Too many false positives", "Cannot detect zero-day threats", "Requires physical access"],
        "answer": "C"
    },
    {
        "question": "Which endpoint control type focuses on blocking data exfiltration?",
        "choices": ["Application firewall", "SIEM", "Data loss prevention (DLP)", "VPN"],
        "answer": "C"
    },
    {
        "question": "Which tool provides centralized control over device policies, restrictions, and encryption for mobile endpoints?",
        "choices": ["IPS", "UEFI", "MDM", "TPM"],
        "answer": "C"
    },
    {
        "question": "What feature ensures devices are running only trusted software during boot?",
        "choices": ["Sandboxing", "Code signing", "Secure boot", "Virtualization"],
        "answer": "C"
    },
    {
        "question": "What system is typically used to manage and secure work-issued smartphones?",
        "choices": ["Firewall", "Patch manager", "Mobile device management (MDM)", "GPO"],
        "answer": "C"
    },
    {
        "question": "Which mobile security method restricts app access to contacts, camera, and GPS?",
        "choices": ["App sandboxing", "Device encryption", "Context-aware firewalling", "App permissions"],
        "answer": "D"
    },
    {
        "question": "What type of update includes security patches and new features?",
        "choices": ["Hotfix", "Firmware", "Cumulative update", "Baseline configuration"],
        "answer": "C"
    },
    {
        "question": "Which component helps ensure hardware trust by securely storing cryptographic keys?",
        "choices": ["TPM", "RAID", "UEFI", "VPN"],
        "answer": "A"
    }
        {
        "question": "A system that Tony manages sends an SNMP trap. What type of information should Tony expect to receive?",
        "choices": ["Notification of a vulnerability", "Notification of a patch being installed", "Notification of an issue", "Notification of user being created"],
        "answer": "C"
    },
    {
        "question": "Ben wants to observe malicious behavior targeted at multiple systems on a network. What has he set up?",
        "choices": ["A honeypot", "A beartrap", "A honeynet", "A tarpit"],
        "answer": "C"
    },
    {
        "question": "Valerie wants to replace telnet access in her organization. Which protocol should she use and what port will it run on?",
        "choices": ["SFTP, port 21", "SSH, port 22", "HTTPS, port 443", "RDP, port 3389"],
        "answer": "B"
    },
    {
        "question": "Jill wants to use DNS filtering to prevent access to malicious sites. What type of service should she use?",
        "choices": ["An OSINT service", "A STP feed", "An ACL monitoring service", "A reputation service"],
        "answer": "D"
    },
    {
        "question": "Chuck wants to provide access to a protected network from a less trusted network. What solution is best?",
        "choices": ["A proxy server", "A jump server", "A VLAN", "An air gap"],
        "answer": "B"
    },
    {
        "question": "Kathleen wants a firewall that can handle high traffic with advanced features. What should she choose?",
        "choices": ["A NGFW", "A WAF", "A UTM", "A SD-FW"],
        "answer": "A"
    },
    {
        "question": "Mark wants to prevent DNS poisoning attacks. What technology should he implement?",
        "choices": ["DNSSEC", "SDNS", "SASE", "SD-WAN"],
        "answer": "A"
    },
    {
        "question": "Lisa needs to block known malicious IPs at the perimeter. What should she use?",
        "choices": ["NAT", "ACL", "Proxy server", "Jump box"],
        "answer": "B"
    },
    {
        "question": "What does an IDS do?",
        "choices": ["Prevents attacks", "Detects suspicious activity", "Encrypts data", "Manages authentication"],
        "answer": "B"
    },
    {
        "question": "What is the function of a DMZ in network design?",
        "choices": ["Block all external access", "Encrypt traffic", "Isolate public-facing servers", "Monitor VPNs"],
        "answer": "C"
    },
    {
        "question": "Which network segmentation method relies on logical groupings rather than physical layout?",
        "choices": ["Air gapping", "VLANs", "Proxies", "Subnets"],
        "answer": "B"
    },
    {
        "question": "Which port is used by HTTPS?",
        "choices": ["80", "21", "22", "443"],
        "answer": "D"
    },
    {
        "question": "Which of the following is most likely to prevent unauthorized wireless access?",
        "choices": ["MAC filtering", "SNMP traps", "NAT", "VPN"],
        "answer": "A"
    },
    {
        "question": "Which security control hides internal IP addresses from external users?",
        "choices": ["VPN", "NAT", "ACL", "DMZ"],
        "answer": "B"
    },
    {
        "question": "Which protocol should replace HTTP for secure communication?",
        "choices": ["FTP", "SNMP", "HTTPS", "Telnet"],
        "answer": "C"
    },
    {
        "question": "Which device connects different networks and determines the best path for data?",
        "choices": ["Switch", "Router", "Firewall", "Hub"],
        "answer": "B"
    },
    {
        "question": "What is the primary role of a WAF?",
        "choices": ["Block spam email", "Control Wi-Fi access", "Protect web applications", "Encrypt web traffic"],
        "answer": "C"
    },
    {
        "question": "Which of the following represents a Zero Trust principle?",
        "choices": ["Allow all internal traffic", "Implicit trust by subnet", "Always verify access requests", "Permit all authenticated users"],
        "answer": "C"
    },
    {
        "question": "Which tool could help detect lateral movement within a corporate network?",
        "choices": ["SIEM", "UTM", "NGFW", "Proxy"],
        "answer": "A"
    },
    {
        "question": "What type of attack uses a large number of systems to flood a target with traffic?",
        "choices": ["SQL injection", "Credential stuffing", "DDoS", "Rogue AP"],
        "answer": "C"
    }
        {
        "question": "Alyssa wants to harden iOS devices her organization uses. What set of guidelines can she follow to align to common industry security practices?",
        "choices": ["OWASP", "CIS benchmarks", "NIST 800-103", "NIST 800-111"],
        "answer": "B"
    },
    {
        "question": "Fred's company uses a BYOD model. He wants to keep corporate data separate from personal data. What solution should he use?",
        "choices": ["Biometrics", "Full-device encryption", "Context-aware authentication", "Containerization"],
        "answer": "D"
    },
    {
        "question": "Michelle wants to make sure iPads used on her factory floor won’t work outside company grounds. What is the best solution?",
        "choices": ["Context-aware authentication", "Geofencing", "Geolocation", "Unified endpoint management (UEM)"],
        "answer": "B"
    },
    {
        "question": "Ivan’s heatmap shows overlapping wireless signals. What will his enterprise access controller most likely do?",
        "choices": [
            "Increase the broadcast power of one of the access points",
            "Change the SSID for one of the access points",
            "Disable one of the access points",
            "Decrease the broadcast power of the access points"
        ],
        "answer": "D"
    },
    {
        "question": "What wireless security protocol replaced WEP and provides enterprise authentication features?",
        "choices": ["WPA", "WPA2", "WPA3", "EAP"],
        "answer": "B"
    },
    {
        "question": "What type of authentication is typically used by enterprise wireless networks?",
        "choices": ["Pre-shared key", "EAP with RADIUS", "WEP key", "TACACS+"],
        "answer": "B"
    },
    {
        "question": "Which technology allows Bluetooth devices to discover each other and connect?",
        "choices": ["Beaconing", "Pairing", "Probing", "Scanning"],
        "answer": "B"
    },
    {
        "question": "What risk is introduced by allowing users to sideload apps onto mobile devices?",
        "choices": ["Root access to device kernel", "Bypassing app store review", "Reduced network performance", "Higher encryption levels"],
        "answer": "B"
    },
    {
        "question": "What best describes jailbreaking?",
        "choices": [
            "Installing unsigned firmware",
            "Installing antivirus",
            "Restoring factory defaults",
            "Updating over the air"
        ],
        "answer": "A"
    },
    {
        "question": "What type of wireless network uses multiple frequencies and high bandwidth to support many devices simultaneously?",
        "choices": ["Bluetooth", "5G cellular", "802.11ac Wi-Fi", "Zigbee"],
        "answer": "C"
    },
    {
        "question": "What deployment model involves devices owned by the organization but also used for personal reasons?",
        "choices": ["BOYD", "CYOD", "COPE", "COBO"],
        "answer": "C"
    },
    {
        "question": "What control helps isolate corporate apps and data on a personal device?",
        "choices": ["MDM", "DLP", "Containerization", "Encryption"],
        "answer": "C"
    },
    {
        "question": "Which method ensures mobile data can be wiped remotely if a device is lost?",
        "choices": ["Geofencing", "VPN", "Remote wipe", "Context-aware auth"],
        "answer": "C"
    },
    {
        "question": "What feature can prevent a lost device from accessing internal resources?",
        "choices": ["Geolocation", "UEM", "Remote wipe", "Quarantine network"],
        "answer": "D"
    },
    {
        "question": "Which tool lets you deploy, update, and manage corporate mobile devices?",
        "choices": ["NAC", "SIEM", "MDM", "NGFW"],
        "answer": "C"
    },
    {
        "question": "Which protocol helps authenticate wireless users with a centralized directory?",
        "choices": ["LDAP", "EAP", "RADIUS", "SNMP"],
        "answer": "C"
    },
    {
        "question": "Which of the following wireless threats allows attackers to impersonate legitimate access points?",
        "choices": ["WEP cracking", "Rogue AP", "Session hijacking", "Replay attack"],
        "answer": "B"
    },
    {
        "question": "Which encryption method is used by WPA3 for protecting wireless communications?",
        "choices": ["AES", "3DES", "TKIP", "RC4"],
        "answer": "A"
    },
    {
        "question": "Which of the following reduces signal leakage outside building boundaries?",
        "choices": ["Lower gain antennas", "Increased encryption", "MAC filtering", "TLS over Wi-Fi"],
        "answer": "A"
    },
    {
        "question": "Which control method is used to isolate insecure mobile apps in a secure workspace?",
        "choices": ["MDM", "Containerization", "App allowlisting", "SIEM"],
        "answer": "B"
    }
        {
        "question": "What is the first step in the incident response cycle according to the Security+ exam?",
        "choices": ["Planning", "Reporting", "Monitoring", "Preparation"],
        "answer": "D"
    },
    {
        "question": "Michael analyzes network traffic, including packet content, as part of his incident response process. What tool should he use?",
        "choices": ["Syslog", "NetFlow", "Packet capture", "SIEM"],
        "answer": "C"
    },
    {
        "question": "Susan wants to create a dashboard that shows login events from different geographic locations to identify impossible travel. What should she use?",
        "choices": ["IPS", "OS logs", "SIEM", "Vulnerability scan data"],
        "answer": "C"
    },
    {
        "question": "Selah wants to ensure only approved applications can be installed in her organization. What should she use?",
        "choices": ["SIEM", "Application deny list", "Application allow list", "sFlow"],
        "answer": "C"
    },
    {
        "question": "What is the primary concern with using sFlow on a large network?",
        "choices": [
            "Allows buffer overflow attacks",
            "Not designed for large networks",
            "Overloads collector host",
            "Only samples traffic, losing detail"
        ],
        "answer": "D"
    },
    {
        "question": "Mark removes a network cable from a system under investigation and labels it. What best describes this action?",
        "choices": ["Containment", "Isolation", "Segmentation", "Zoning"],
        "answer": "B"
    },
    {
        "question": "Ben walks his team through a fictional scenario to validate response procedures. What has he hosted?",
        "choices": ["Checklist exercise", "Simulation", "Tabletop exercise", "Fail-over exercise"],
        "answer": "C"
    },
    {
        "question": "Madhuri wants to find GPS coordinates in a photo. Where should she look?",
        "choices": ["location.txt", "The camera", "Metadata", "Steganographic field"],
        "answer": "C"
    },
    {
        "question": "Alyssa removes a malware-infected machine from the network. What has she done?",
        "choices": ["Quarantine", "Segmentation", "Converted to agentless", "Deny listed it"],
        "answer": "A"
    },
    {
        "question": "Kristen notices missing logs during threat hunting. What is the most likely explanation?",
        "choices": ["Log rotation", "New system", "Attacker wiped logs", "Logs encrypted by attacker"],
        "answer": "C"
    },
    {
        "question": "Ian’s SIEM sends false alerts during routine tasks. What should he change?",
        "choices": ["Trend analysis", "Sensitivity", "Correlation rules", "Dashboard settings"],
        "answer": "C"
    },
    {
        "question": "Which incident response phase focuses on identifying the root cause through IoCs and logs?",
        "choices": ["Preparation", "Containment", "Eradication", "Identification"],
        "answer": "D"
    },
    {
        "question": "Henry wants to see if new services were installed by an attacker. What should he review?",
        "choices": ["Registry dumps", "Firewall logs", "Vulnerability scans", "Flow logs"],
        "answer": "A"
    },
    {
        "question": "What does 'quarantine' mean in the context of incident response?",
        "choices": [
            "Blocking external access",
            "Limiting malware to one drive",
            "Isolating an infected system",
            "Wiping logs from infected systems"
        ],
        "answer": "C"
    },
    {
        "question": "What type of data source provides the most useful information for full packet-level inspection?",
        "choices": ["SIEM", "Packet capture", "Flow logs", "Log aggregation"],
        "answer": "B"
    },
    {
        "question": "Which activity is typically conducted immediately after containment?",
        "choices": ["Eradication", "Lessons learned", "Preparation", "Identification"],
        "answer": "A"
    },
    {
        "question": "Which response phase involves documenting findings and improving procedures?",
        "choices": ["Containment", "Detection", "Recovery", "Lessons learned"],
        "answer": "D"
    },
    {
        "question": "Which method helps identify accounts being used from unusual locations?",
        "choices": ["NetFlow", "SIEM with geolocation rules", "IPS", "Endpoint logs"],
        "answer": "B"
    },
    {
        "question": "Which technique helps isolate compromised systems while maintaining their availability for forensics?",
        "choices": ["Eradication", "Quarantine", "Segmentation", "Root cause analysis"],
        "answer": "C"
    },
    {
        "question": "Which tool allows organizations to ingest logs and display visual dashboards with alerting?",
        "choices": ["Firewall", "SIEM", "NetFlow", "Vulnerability scanner"],
        "answer": "B"
    }
        {
        "question": "What is the primary purpose of hashing digital evidence in forensics?",
        "choices": ["To prevent malware", "To verify data integrity", "To create a backup", "To hide sensitive files"],
        "answer": "B"
    },
    {
        "question": "Which of the following types of data is considered volatile?",
        "choices": ["Printouts", "RAM", "Hard disk", "USB flash drive"],
        "answer": "B"
    },
    {
        "question": "Which tool captures the current state of a system’s memory?",
        "choices": ["Checksum utility", "Drive imager", "Memory dumper", "File hasher"],
        "answer": "C"
    },
    {
        "question": "In digital forensics, which step follows identification and collection?",
        "choices": ["Preservation", "Acquisition", "Analysis", "Chain of custody"],
        "answer": "C"
    },
    {
        "question": "Which of the following logs would be most useful in identifying lateral movement?",
        "choices": ["Web proxy logs", "Firewall logs", "Authentication logs", "DNS logs"],
        "answer": "C"
    },
    {
        "question": "What document tracks every individual who handled evidence?",
        "choices": ["Forensics log", "Audit report", "Chain of custody", "Risk register"],
        "answer": "C"
    },
    {
        "question": "Which forensic technique identifies data hidden in image files?",
        "choices": ["Obfuscation", "Steganalysis", "Root cause analysis", "Pivoting"],
        "answer": "B"
    },
    {
        "question": "Which report format is commonly used to summarize forensics findings?",
        "choices": ["Executive summary", "Compliance report", "Chain of events", "Chain of custody"],
        "answer": "A"
    },
    {
        "question": "What is the purpose of the postmortem phase of a forensic investigation?",
        "choices": ["Eradication", "Lessons learned", "System hardening", "Backup"],
        "answer": "B"
    },
    {
        "question": "Which of the following is least likely to be included in a forensic report?",
        "choices": ["Hash values", "Raw evidence", "Findings", "Time stamps"],
        "answer": "B"
    },
    {
        "question": "What type of control is a written policy?",
        "choices": ["Technical", "Administrative", "Physical", "Operational"],
        "answer": "B"
    },
    {
        "question": "Which framework is most often used to guide U.S. federal cybersecurity efforts?",
        "choices": ["COBIT", "ISO 27001", "NIST CSF", "PCI DSS"],
        "answer": "C"
    },
    {
        "question": "Which document defines expected behavior and conduct for employees?",
        "choices": ["AUP", "Code of conduct", "NDA", "Incident response plan"],
        "answer": "B"
    },
    {
        "question": "Which term refers to validating that a change won't introduce security issues?",
        "choices": ["Change control", "Regression testing", "Penetration testing", "Postmortem"],
        "answer": "B"
    },
    {
        "question": "Which security concept refers to verifying the identity of a person or system?",
        "choices": ["Authorization", "Accounting", "Authentication", "Nonrepudiation"],
        "answer": "C"
    },
    {
        "question": "Which of the following would be considered a deterrent control?",
        "choices": ["Security policy", "CCTV camera", "Firewall", "Backup tape"],
        "answer": "B"
    },
    {
        "question": "Which law governs how companies handle credit card data?",
        "choices": ["SOX", "HIPAA", "PCI DSS", "FERPA"],
        "answer": "C"
    },
    {
        "question": "What does GDPR primarily focus on?",
        "choices": ["Cybercrime enforcement", "Data protection and privacy", "Infrastructure integrity", "Financial accountability"],
        "answer": "B"
    },
    {
        "question": "Which policy outlines procedures for when an employee leaves an organization?",
        "choices": ["Acceptable use policy", "Onboarding policy", "Termination policy", "Data retention policy"],
        "answer": "C"
    },
    {
        "question": "What concept refers to applying security measures based on the importance of information?",
        "choices": ["Data sovereignty", "Data classification", "Risk transfer", "Quantitative analysis"],
        "answer": "B"
    },
    {
        "question": "Which type of risk analysis assigns numeric values to risks?",
        "choices": ["Qualitative", "Quantitative", "Subjective", "Control-based"],
        "answer": "B"
    },
    {
        "question": "What does the RTO measure?",
        "choices": ["Time to detect a breach", "Time to restore operations", "Cost of breach", "Time between backups"],
        "answer": "B"
    },
    {
        "question": "Which of the following describes the risk that remains after controls are applied?",
        "choices": ["Residual risk", "Inherent risk", "Accepted risk", "Transferred risk"],
        "answer": "A"
    },
    {
        "question": "What type of backup copies all changed files since the last full backup?",
        "choices": ["Differential", "Incremental", "Full", "Snapshot"],
        "answer": "A"
    },
    {
        "question": "Which of the following is an example of a physical control?",
        "choices": ["Encryption", "Security guard", "Password policy", "Security awareness training"],
        "answer": "B"
    },
    {
        "question": "What document outlines the steps for restoring systems after a disaster?",
        "choices": ["Risk register", "Change log", "Disaster recovery plan", "Business case"],
        "answer": "C"
    },
    {
        "question": "Which principle ensures users are only given access necessary for their roles?",
        "choices": ["Need-to-know", "Segregation of duties", "Least privilege", "Role-based access"],
        "answer": "C"
    },
    {
        "question": "What metric measures how much data an organization can afford to lose?",
        "choices": ["RPO", "RTO", "ALE", "MTTF"],
        "answer": "A"
    },
    {
        "question": "Which privacy principle limits data usage to only stated purposes?",
        "choices": ["Data minimization", "Data sovereignty", "Purpose limitation", "Need-to-know"],
        "answer": "C"
    },
    {
        "question": "What is the term for a person who determines how personal data is processed?",
        "choices": ["Data subject", "Data processor", "Data controller", "Data custodian"],
        "answer": "C"
    },
    {
        "question": "What classification is given to U.S. government information requiring the highest security?",
        "choices": ["Confidential", "Secret", "Top Secret", "Unclassified"],
        "answer": "C"
    },
    {
        "question": "What tool helps prioritize risks based on likelihood and impact?",
        "choices": ["Risk matrix", "Backup schedule", "Security baseline", "RTO table"],
        "answer": "A"
    },
    {
        "question": "What risk response strategy involves buying insurance?",
        "choices": ["Mitigation", "Avoidance", "Transfer", "Acceptance"],
        "answer": "C"
    },
    {
        "question": "What U.S. regulation governs educational records privacy?",
        "choices": ["SOX", "HIPAA", "FERPA", "GLBA"],
        "answer": "C"
    },
    {
        "question": "Which disaster recovery strategy provides near real-time availability by duplicating data?",
        "choices": ["Cold site", "Warm site", "Hot site", "Air gap"],
        "answer": "C"
    },
    {
        "question": "What is an example of a compensating control?",
        "choices": ["Firewall", "Biometrics", "Two-person rule", "Change management"],
        "answer": "C"
    },
    {
        "question": "Which framework is widely used for IT governance and control?",
        "choices": ["PCI DSS", "COBIT", "FERPA", "HIPAA"],
        "answer": "B"
    },
    {
        "question": "Which regulation primarily governs the financial reporting of public U.S. companies?",
        "choices": ["SOX", "HIPAA", "FERPA", "PCI DSS"],
        "answer": "A"
    },
    {
        "question": "Which role is responsible for defining policies, procedures, and risk tolerance?",
        "choices": ["Data steward", "Security analyst", "Executive leadership", "Auditor"],
        "answer": "C"
    },
    {
        "question": "Which privacy concept ensures individuals can access and correct their own data?",
        "choices": ["Data minimization", "Data accuracy", "Data portability", "Data subject rights"],
        "answer": "D"
    },
    {
        "question": "Which term describes using multiple overlapping controls to reduce risk?",
        "choices": ["Zero trust", "Layered security", "Data classification", "Risk aggregation"],
        "answer": "B"
    },
    {
        "question": "Which privacy regulation is considered extraterritorial, applying outside its own country?",
        "choices": ["PCI DSS", "FERPA", "GDPR", "HIPAA"],
        "answer": "C"
    },
    {
        "question": "Which risk treatment method involves not engaging in risky activity?",
        "choices": ["Acceptance", "Avoidance", "Mitigation", "Transfer"],
        "answer": "B"
    },
    {
        "question": "Which control ensures that if one person makes a change, another must approve it?",
        "choices": ["Least privilege", "Need-to-know", "Separation of duties", "Multifactor authentication"],
        "answer": "C"
    },
    {
        "question": "Which recovery strategy offers the fastest system availability?",
        "choices": ["Cold site", "Warm site", "Hot site", "Cloud backups"],
        "answer": "C"
    },
    {
        "question": "Which disaster recovery term refers to the point in time to which data must be restored?",
        "choices": ["MTTR", "RPO", "RTO", "MTBF"],
        "answer": "B"
    }
        {
        "question": "Which of the following best defines business continuity?",
        "choices": ["Ensuring long-term market share", "Restoring IT systems quickly", "Maintaining operations through disruption", "Protecting data at rest"],
        "answer": "C"
    },
    {
        "question": "Which document outlines the scope and assumptions of a disaster recovery plan?",
        "choices": ["Data retention policy", "Business continuity plan", "Recovery strategy", "DRP charter"],
        "answer": "D"
    },
    {
        "question": "Which of the following terms refers to how long systems can be down before causing major damage?",
        "choices": ["RTO", "RPO", "MTBF", "MTTR"],
        "answer": "A"
    },
    {
        "question": "What is the primary goal of a disaster recovery plan?",
        "choices": ["Preventing incidents", "Restoring normal operations", "Mitigating risk", "Auditing changes"],
        "answer": "B"
    },
    {
        "question": "Which type of site requires the most time to bring online?",
        "choices": ["Warm site", "Cold site", "Hot site", "Cloud backup site"],
        "answer": "B"
    },
    {
        "question": "Which of the following is an example of a control used to support data minimization?",
        "choices": ["Encryption", "Audit logs", "Retention policy", "Air gapping"],
        "answer": "C"
    },
    {
        "question": "Which term describes the risk associated with the use of third-party services and providers?",
        "choices": ["Residual risk", "Vendor risk", "Acceptable risk", "Transferred risk"],
        "answer": "B"
    },
    {
        "question": "Which concept refers to a company’s legal obligation to protect personal information?",
        "choices": ["Data minimization", "Duty of care", "Due diligence", "Data sovereignty"],
        "answer": "B"
    },
    {
        "question": "Which document typically includes RTO and RPO values?",
        "choices": ["Incident response plan", "Disaster recovery plan", "Risk register", "Continuity charter"],
        "answer": "B"
    },
    {
        "question": "What is the purpose of performing tabletop exercises?",
        "choices": ["Penetration testing", "Testing backups", "Simulating incident response", "Auditing risk controls"],
        "answer": "C"
    },
    {
        "question": "Which role is responsible for day-to-day information protection operations?",
        "choices": ["Data processor", "Data controller", "Security analyst", "Data steward"],
        "answer": "D"
    },
    {
        "question": "Which of the following is a primary goal of a privacy program?",
        "choices": ["Control physical access", "Reduce administrative overhead", "Ensure lawful data processing", "Increase productivity"],
        "answer": "C"
    },
    {
        "question": "Which concept refers to knowing where data resides and is processed?",
        "choices": ["Data minimization", "Data localization", "Data sovereignty", "Data inventory"],
        "answer": "C"
    }
]