# Altcorp Site Reference

This file consolidates the reusable information found in this repository before the current prototype/theme files are removed.

It is intended to be the source reference for rebuilding the Altcorp website from scratch.

## Scope

Sources reviewed:

- `prototype/`
- `altcorp-theme/`
- `_archive/prototype_v1/`
- `_archive/altcorp-theme_v1/`
- `docker-compose.yml`

## Executive Summary

- The repository contains two main website concepts:
  - `current iteration`: a cyber-industrial / systems-themed brochure site
  - `archived v1 iteration`: a cleaner venture-studio / digital empire brochure site
- The site is not connected to a live production environment in this repo.
- The current WordPress implementation is a custom classic theme.
- No production WordPress admin credentials were found in the repo.
- The only concrete external product link found is for `CPA & CME Tracker` on Google Play.

## Canonical Business Identity Found In Repo

### Company

- Name: `AltCorp`
- Alternate display: `ALTCORP`
- Footer label in current version: `ALTCORP SYSTEMS`
- Archived legal footer wording: `AltCorp Pvt Ltd.`
- Established: `2024`
- Location: `Bangalore, India`
- Country positioning in archived copy: `made in India`

### Domain and Brand URLs

- Primary domain referenced in theme metadata: `https://altcorp.in`
- Theme URI: `https://altcorp.in`
- Author URI: `https://altcorp.in`

### Founder

- Founder name: `Syed Irfan`
- Founder image asset:
  - `founder.webp`
  - `prototype/founder.webp`
  - `altcorp-theme/founder.webp`
  - archived copies also exist

## Current Iteration: Content To Preserve

This is the newest content set found in `prototype/` and `altcorp-theme/`.

### Site Structure

- Home
- Ventures
- Vision
- Contact

### Navigation Labels

- `/INDEX`
- `/VENTURES`
- `/VISION`
- `/CONTACT`

### Repeated UI / Brand Phrases

- `SYSTEM ONLINE`
- `ALL SYSTEMS OPERATIONAL`
- `GLOBAL-GRADE DIGITAL INFRASTRUCTURE`
- `INITIALIZING SEQUENCE`
- `THE ECOSYSTEM`
- `STRATEGIC PORTFOLIO`
- `SYSTEM VISION`
- `ESTABLISH CONNECTION`

## Current Iteration: Home Page

### Hero

- Label: `:: INITIALIZING SEQUENCE ::`
- Heading: `GLOBAL-GRADE DIGITAL INFRASTRUCTURE`
- Supporting text:

> We build the systems that power the next generation of the internet. Unbreakable. Scalable. Sovereign.

- Primary CTA:
  - label: `Explore System`
  - target: `/ventures`

### Homepage Venture Teasers

1. `Supaviewer`
   - description: `Advanced analytics for the entertainment industry. Processing millions of data points in real-time.`
   - CTA label: `ACCESS TERMINAL`
   - URL: placeholder `#`

2. `BurnerLinks`
   - description: `Ephemeral data transmission. Secure. Traceless. One-time access protocols.`
   - CTA label: `INITIATE LINK`
   - URL: placeholder `#`

3. `UltraStupid`
   - description: `Next-gen finance tracking via gesture inputs.`
   - CTA label: `VIEW DATA`
   - URL: placeholder `#`

4. `CPA & CME Tracker`
   - description: `Professional compliance tracking for medical personnel. Automated credit verification.`
   - CTA label: `DOWNLOAD PROTOCOL`
   - URL: `https://play.google.com/store/apps/details?id=com.cmetrackerpro.app&pcampaignid=web_share`

## Current Iteration: Ventures Page

### Page Hero

- Heading: `STRATEGIC PORTFOLIO`
- Subtext: `DEPLOYED ASSETS AND ACTIVE VENTURES.`

### Categories and Product Entries

#### Category: Software and Apps

1. `Supaviewer`
   - description: `AI-powered film ratings and analytics platform.`
   - CTA label: `ACCESS TERMINAL`
   - URL: placeholder `#`

2. `BurnerLinks`
   - description: `Secure, one-time use links for privacy-first sharing.`
   - CTA label: `INITIATE LINK`
   - URL: placeholder `#`

3. `UltraStupid`
   - description: `Gesture-based finance tracking.`
   - CTA label: `VIEW DATA`
   - URL: placeholder `#`

4. `CPA & CME Tracker`
   - description: `Professional credit tracking for medical practitioners.`
   - CTA label: `DOWNLOAD PROTOCOL`
   - URL: `https://play.google.com/store/apps/details?id=com.cmetrackerpro.app&pcampaignid=web_share`

#### Category: Digital Commerce

1. `MedicalNotes`
   - description: `Premium medical education resources for students and pros.`
   - CTA label: `ACCESS DATABASE`
   - URL: placeholder `#`

#### Category: Verification Tools

1. `Verified.Doctor`
   - description: `The gold standard for medical professional verification.`
   - CTA label: `VERIFY ID`
   - URL: placeholder `#`

2. `SuperDoctor.io`
   - description: `Next-gen tools for super doctors.`
   - CTA label: `ACCESS TOOLS`
   - URL: placeholder `#`

## Current Iteration: Vision Page

### Page Hero

- Heading: `SYSTEM VISION`
- Subtext: `THE ARCHITECTURE OF TOMORROW.`

### Founder / Mission Section

- Founder label: `FOUNDER_DATA // SYED_IRFAN`
- Mission label: `MISSION_LOG // 2024`
- Mission headline: `INNOVATION WITHOUT PERMISSION.`

### Mission Copy

> INITIATING SEQUENCE...
> FOUNDER: SYED IRFAN
> OBJECTIVE: BUILD GLOBAL-GRADE INFRASTRUCTURE
>
> AltCorp is not a company. It is a machine for building the future. We believe in the power of code to solve real-world problems. Our mission is simple: Design excellence, AI-first innovation, and global scale.
>
> We are building the infrastructure for the next decade of digital growth.

### Value Pillars

1. `01. DESIGN`
   - `Aesthetics are functional. We build systems that are beautiful by necessity.`

2. `02. AI-NATIVE`
   - `Intelligence is not an add-on. It is the core kernel of our operations.`

3. `03. SCALE`
   - `Built for millions. Engineered for billions. No compromise on performance.`

## Current Iteration: Contact Page

### Page Hero

- Heading: `ESTABLISH CONNECTION`
- Subtext: `SECURE CHANNEL OPEN. TRANSMIT DATA.`

### Contact Details

- Email: `CONTACT@ALTCORP.IN`
- HQ: `BANGALORE, INDIA`
- Status: `ACCEPTING NEW PARTNERS`
- Additional visual-only token: `0x4F46E5...888888`

### Contact Form Labels and Fields

1. `IDENTITY // NAME`
   - type: text
   - placeholder intent: enter name

2. `COORDINATES // EMAIL`
   - type: email
   - placeholder intent: enter email

3. `TYPE // INQUIRY`
   - type: text
   - placeholder: `INVESTMENT / PARTNERSHIP`

4. `DATA // MESSAGE`
   - type: textarea
   - placeholder intent: enter message content

5. Submit button
   - label: `TRANSMIT`

### Contact Form Wiring Status

- Current version form action: `#`
- Conclusion: current contact form is visual only and not wired to email or backend submission

## Current Iteration: Footer / Legal / Status

### Footer Blocks

- Company block:
  - `ALTCORP SYSTEMS`
  - `EST. 2024`
  - `BANGALORE, IN`

- Directory links:
  - `/VENTURES`
  - `/VISION`
  - `/CONTACT`

- Legal links:
  - `PRIVACY_POLICY`
  - `TERMS_OF_USE`
  - both use placeholder `#`

- Status:
  - `ALL SYSTEMS OPERATIONAL`

## Archived V1 Iteration: Content To Preserve

This older version contains some additional business copy and extra product names not present in the current version.

### Brand Direction

- Theme name: `AltCorp Empire`
- Description: `The digital empire of AltCorp. Premium, Navy/Cyan, Visionary.`

### Homepage Positioning

Archived homepage variants used these messages:

1. `Innovation without permission. Products built for tomorrow.`
2. `Engineering the Future. One Pixel at a Time.`
3. `Building the Digital Empire`

### Archived Vision Copy

Important reusable copy from archived v1:

> Founded by Syed Irfan, AltCorp represents a shift in how digital products are built and delivered. We don't wait for the future; we build it.

> Our philosophy is rooted in Design Excellence and AI-First Thinking. Every product we launch is a testament to our obsession with quality and user experience.

> We are building a global-grade digital infrastructure, right here from India.

### Archived Value Pillars

1. `Design First`
   - `We believe aesthetics are a feature, not an afterthought.`

2. `AI Native`
   - `Artificial Intelligence is woven into the fabric of everything we build.`

3. `Global Scale`
   - `Products built for the world, with standards to match.`

### Archived Product List Additions

Products found in archived v1 but not in the current version:

1. `SupaBaby.io`
   - description: `Personal social apps connecting families. (Coming Soon)`
   - status text: `Coming Soon`
   - URL: none found

2. `KingBundle`
   - description: `Curated digital assets for creators and dreamers.`
   - URL: placeholder `#`

### Archived Contact Positioning

- Heading: `Partner with the Future`
- Supporting line: `Ready to build something extraordinary? Let's talk.`

### Archived Contact Form Labels

1. `Name`
2. `Email`
3. `Inquiry Type`
4. `Message`
5. Submit label: `Send Inquiry`

### Archived Contact Form Wiring Status

- Archived WordPress contact form posts to `admin-post.php`
- No backend handler was found in the archived theme files
- Conclusion: even the archived WordPress contact form does not appear fully wired in this repo

### Archived Footer Data

- Footer links:
  - `Legal`
  - `Privacy`
  - `Investors`
- Footer legal line:
  - `AltCorp Pvt Ltd. Global-grade products, made in India.`

## Master Product Inventory

This list merges current and archived product references.

| Product | Category | Description | URL | Status |
| --- | --- | --- | --- | --- |
| Supaviewer | Software and Apps | AI-powered film ratings and analytics platform. Also described on current home as advanced analytics for the entertainment industry processing millions of data points in real time. | None found beyond placeholder `#` | Mentioned in current and archived versions |
| BurnerLinks | Software and Apps | Secure, one-time use links for privacy-first sharing. Also described as ephemeral, secure, traceless, one-time access protocols. | None found beyond placeholder `#` | Mentioned in current and archived versions |
| UltraStupid | Software and Apps | Gesture-based finance tracking. Also described as next-gen finance tracking via gesture inputs. | None found beyond placeholder `#` | Mentioned in current and archived versions |
| CPA & CME Tracker | Software and Apps | Professional credit/compliance tracking for medical personnel and practitioners. | `https://play.google.com/store/apps/details?id=com.cmetrackerpro.app&pcampaignid=web_share` | Only concrete external product link found |
| MedicalNotes | Digital Commerce | Premium medical education resources for students and pros. | None found beyond placeholder `#` | Mentioned in current and archived versions |
| Verified.Doctor | Verification Tools | The gold standard for medical professional verification. | None found beyond placeholder `#` | Mentioned in current and archived versions |
| SuperDoctor.io | Verification Tools | Next-gen tools for super doctors. | None found beyond placeholder `#` | Mentioned in current and archived versions |
| SupaBaby.io | Software and Apps | Personal social apps connecting families. | No live URL found | Archived v1 only |
| KingBundle | Digital Commerce | Curated digital assets for creators and dreamers. | None found beyond placeholder `#` | Archived v1 only |

## Real Links Found In Repo

### Business / Product

- `https://altcorp.in`
- `https://play.google.com/store/apps/details?id=com.cmetrackerpro.app&pcampaignid=web_share`

### Technical / Theme Assets

- Google Fonts imports are used in theme stylesheets
- GSAP CDN is used in the current theme:
  - `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js`

### Placeholder / Not Real Links

The following were found as placeholders and should not be treated as real destinations:

- `#` product links
- `#` legal links
- homepage anchor links in archived prototype

## WordPress / Admin / Local Build Information

### Current Theme Metadata

- Theme name: `AltCorp (Cyber-Industrial Ultimate)`
- Theme URI: `https://altcorp.in`
- Author: `Syed Irfan`
- Author URI: `https://altcorp.in`
- Version: `5.0.0`
- Text domain: `altcorp`

### Current WordPress Theme Behavior

- Uses a custom classic theme
- Registered menu location:
  - `primary`
- Theme supports:
  - `title-tag`
  - `post-thumbnails`
- Custom templates force-assigned by page slug/title:
  - `ventures` -> `page-ventures.php`
  - `vision` -> `page-vision.php`
  - `contact` -> `page-contact.php`

### Local Docker / Development Info

From `docker-compose.yml`:

- MySQL image: `mysql:8.0`
- WordPress image: `wordpress:latest`
- DB container name: `altcorp_db`
- WordPress container name: `altcorp_wp`
- Port mapping: `8000:80`
- Local theme mount:
  - `./altcorp-theme:/var/www/html/wp-content/themes/altcorp-theme`

### Local Database Credentials Present In Repo

These appear to be local development credentials only:

- MySQL root password: `somewordpress`
- MySQL database: `wordpress`
- MySQL user: `wordpress`
- MySQL password: `wordpress`
- WordPress DB host: `db`
- WordPress DB user: `wordpress`
- WordPress DB password: `wordpress`
- WordPress DB name: `wordpress`

### Production Admin Info Found

- No production WordPress admin username found
- No production WordPress admin password found
- No API keys found
- No SMTP credentials found
- No analytics IDs found

## Content Gaps / Missing Data

The following items will need new decisions during the rebuild:

- Real product URLs for most ventures
- Actual legal pages and their text
- Actual investor page or investor contact flow
- Whether `AltCorp Pvt Ltd.` is still the preferred legal entity wording
- Final contact email to display
- Form submission destination and CRM/email workflow
- Social links
- Phone number
- Postal address
- Team or leadership page content beyond founder
- Clear primary conversion goal for the site

## Recommended Rebuild Inputs

When rebuilding the fresh site, the minimum preserved data from this file that can be reused immediately is:

1. Company identity
   - AltCorp
   - Bangalore, India
   - Founder: Syed Irfan

2. Core positioning themes
   - global-grade digital infrastructure
   - innovation without permission
   - AI-first / AI-native
   - design excellence
   - scale

3. Product inventory
   - Supaviewer
   - BurnerLinks
   - UltraStupid
   - CPA & CME Tracker
   - MedicalNotes
   - Verified.Doctor
   - SuperDoctor.io
   - SupaBaby.io
   - KingBundle

4. Basic page structure
   - Home
   - Ventures
   - Vision
   - Contact

5. Known real links
   - `https://altcorp.in`
   - `https://play.google.com/store/apps/details?id=com.cmetrackerpro.app&pcampaignid=web_share`

## Source File Pointers

Current iteration:

- `altcorp-theme/front-page.php`
- `altcorp-theme/page-ventures.php`
- `altcorp-theme/page-vision.php`
- `altcorp-theme/page-contact.php`
- `altcorp-theme/footer.php`
- `altcorp-theme/functions.php`
- `altcorp-theme/style.css`
- `prototype/index.html`
- `prototype/ventures.html`
- `prototype/vision.html`
- `prototype/contact.html`

Archived v1:

- `_archive/altcorp-theme_v1/index.php`
- `_archive/altcorp-theme_v1/page-ventures.php`
- `_archive/altcorp-theme_v1/page-vision.php`
- `_archive/altcorp-theme_v1/page-contact.php`
- `_archive/altcorp-theme_v1/footer.php`
- `_archive/altcorp-theme_v1/functions.php`
- `_archive/altcorp-theme_v1/style.css`
- `_archive/prototype_v1/index.html`
- `_archive/prototype_v1/home.html`
- `_archive/prototype_v1/ventures.html`
- `_archive/prototype_v1/vision.html`
- `_archive/prototype_v1/contact.html`

