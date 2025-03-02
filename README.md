# Vulnerability SCA Test Project

This repository contains deliberately vulnerable code for testing Security Code Analysis (SCA) tools. **DO NOT USE THIS CODE IN PRODUCTION**.

## Purpose

This project includes various security vulnerabilities commonly found in web applications:

- Outdated dependencies with known CVEs
- SQL Injection vulnerabilities
- Command Injection vulnerabilities
- Cross-Site Scripting (XSS) vulnerabilities
- Path Traversal vulnerabilities
- Hardcoded credentials
- Weak cryptography implementations
- Insecure cookie handling
- Regular Expression Denial of Service (ReDoS) vulnerabilities

## Usage

This project is intended for educational purposes and for testing the effectiveness of security scanning tools. 

To test SCA tools against this repository:
1. Clone the repository
2. Point your SCA tool at the repository
3. Run the scan
4. Check which vulnerabilities were detected

## Disclaimer

This code is deliberately vulnerable and should never be used in a production environment or as a basis for actual projects.
```

## 5. Setting Up GitHub Security Features

After adding these files, you can enable GitHub's built-in security features:

1. Go to the "Security" tab in your repository
2. Enable "Dependabot alerts" to scan for vulnerable dependencies
3. Enable "Code scanning" to use GitHub's CodeQL analysis
4. You can also set up "Secret scanning" to detect any leaked secrets

## 6. Testing with Other SCA Tools

You can use this repository to test various SCA tools:

- OWASP Dependency-Check
- Snyk
- SonarQube
- Checkmarx
- WhiteSource

Simply point these tools at your repository and see which vulnerabilities they detect.

## 7. Next Steps

Consider adding more vulnerable code patterns based on the OWASP Top 10 or specific vulnerabilities you want to test for.

Remember, the goal is to have a repository that contains various security issues that good SCA tools should be able to identify.
