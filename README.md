# ScoTech Writer — website and downloads

Public landing page (GitHub Pages) and installer downloads (GitHub Releases) for ScoTech Writer.
The source code lives in the private `scotech-writer` repository.

## Publish a new version
1. In the private repo run `installer\build.ps1`; it makes `ScoTechWriter-<version>-Setup.exe`.
2. Here: **Releases → Draft a new release**, tag `v<version>`, attach the `.exe`, **Publish**.
3. The page picks it up automatically (name must end in `-Setup.exe`). GitHub shows the SHA-256 and the page prints it.
