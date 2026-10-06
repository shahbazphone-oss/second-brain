# Second Brain - Complete User Manual & Configuration Guide

**Version:** 1.0  
**Last Updated:** October 2026  
**Author:** Second Brain Development Team  
**Document Type:** User Manual & Trial Setup Guide

---

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [System Requirements](#system-requirements)
3. [Installation Guide](#installation-guide)
4. [Initial Configuration](#initial-configuration)
5. [How to Use](#how-to-use)
6. [Features Overview](#features-overview)
7. [Voice Recognition Setup](#voice-recognition-setup)
8. [AI Integration & Suggestions](#ai-integration--suggestions)
9. [Troubleshooting](#troubleshooting)
10. [FAQ](#faq)
11. [Trial Limitations & Upgrade Path](#trial-limitations--upgrade-path)

---

## Introduction

**Second Brain** is a personal knowledge management system designed for busy professionals, students, and creative thinkers who want to:
- Capture ideas instantly
- Organize thoughts by tags and relationships
- Review and recall information effortlessly
- Turn ideas into actionable tasks
- Get AI-powered suggestions for deeper insights

This manual covers everything you need to set up and use Second Brain on your computer (Windows, Mac, or Linux) for a 30-day trial period.

---

## System Requirements

### Minimum Requirements:
| Requirement | Specification |
|------------|--------------|
| **OS** | Windows 10+, macOS 10.14+, Linux (Ubuntu 18+) |
| **Processor** | Intel i3 / AMD Ryzen 3 or equivalent |
| **RAM** | 4GB minimum (8GB recommended) |
| **Disk Space** | 500MB for installation + app data |
| **Browser** | Chrome, Safari, Firefox, Edge (latest version) |
| **Internet** | Required for AI features (optional for basic use) |
| **Node.js** | Version 16.0 or higher |

### Recommended Setup:
- 8GB+ RAM
- SSD storage (faster loading)
- High-speed internet (for AI features)
- Modern laptop/desktop

---

## Installation Guide

### For Windows Users

**Step 1: Download Node.js**
1. Visit: https://nodejs.org/
2. Click the green **"LTS"** button
3. Run the installer
4. Follow default settings (click "Next" through all screens)
5. Restart your computer

**Step 2: Verify Installation**
1. Press `Win + R`
2. Type: `cmd` and press Enter
3. Type: `node --version` and press Enter
4. You should see a version number (e.g., v18.0.0)

**Step 3: Get Second Brain**
1. Press `Win + R`
2. Type: `cmd` and press Enter
3. Copy and paste this line:
```
cd Desktop && git clone https://github.com/shahbazphone-oss/second-brain.git && cd second-brain && npm install
```
4. Press Enter and wait 3-5 minutes
5. Then type: `npm run dev`
6. Copy the link shown (usually http://localhost:3000)

**Step 4: Open in Browser**
1. Paste the link in Chrome, Safari, or Firefox
2. Your Second Brain opens!

---

### For Mac Users

**Step 1: Download Node.js**
1. Visit: https://nodejs.org/
2. Click the green **"LTS"** button (Mac version)
3. Double-click to install
4. Follow the installer steps
5. Restart your computer

**Step 2: Verify Installation**
1. Press `Cmd + Space`
2. Type: `terminal` and press Enter
3. Type: `node --version`
4. You should see a version number

**Step 3: Get Second Brain**
1. Open Terminal (Cmd + Space, type "terminal")
2. Copy and paste:
```
cd Desktop && git clone https://github.com/shahbazphone-oss/second-brain.git && cd second-brain && npm install
```
3. Press Enter and wait 3-5 minutes
4. Type: `npm run dev`
5. Copy the link shown

**Step 4: Open in Browser**
1. Paste the link in Safari or Chrome
2. Done!

---

### For Linux Users

**Step 1: Install Node.js**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Step 2: Clone and Install**
```bash
cd ~/Desktop
git clone https://github.com/shahbazphone-oss/second-brain.git
cd second-brain
npm install
```

**Step 3: Run the App**
```bash
npm run dev
```

**Step 4: Open in Browser**
- Paste http://localhost:3000 in your browser

---

## Initial Configuration

### First Launch Checklist

**After opening the app, you'll see:**
- ✓ Welcome note with introduction
- ✓ Empty note library (left sidebar)
- ✓ Today at a Glance statistics
- ✓ Editor panel ready to use

### Browser Settings for Best Experience

**1. Enable Local Storage:**
- Your notes are stored locally on your computer
- The app needs permission to save data
- Most browsers allow this automatically
- If prompted: Click "Allow"

**2. Enable Notifications (Optional):**
- For task reminders
- Mac: System Preferences > Notifications
- Windows: Settings > System > Notifications

**3. Enable Microphone Access (For Voice Features):**
- Go to your browser settings
- Find microphone permissions
- Allow `localhost:3000` access
- Chrome: Settings > Privacy > Microphone
- Safari: System Preferences > Security > Microphone

### Create Your First Profile

**Note:** Second Brain uses local storage. Each browser/device is separate.

**Step 1:** Open the app
**Step 2:** Look at the top-left "Welcome to your second brain" note
**Step 3:** Click it and edit:
- Change title to: "My Profile"
- Add your name and goals
- Save

This is your starting point!

---

## How to Use

### Daily Workflow (5 Minutes)

**Morning (1 min):**
1. Open app
2. Look at "Today at a Glance"
3. Check your task queue
4. Review pinned ideas

**During Day (2 min):**
1. Click "New note" whenever idea strikes
2. Voice note: Click microphone 🎤 to record
3. Type quickly or use voice input
4. Tags: `#project #urgent #review`
5. Save (auto-saves after 2 seconds)

**Evening (2 min):**
1. Review "Relationship map"
2. Link ideas together
3. Pin tomorrow's focus
4. Export backup

---

### Creating a Note (Step-by-Step)

**Step 1: Click "New note" (blue button, top right)**
- A blank form appears
- You're ready to capture

**Step 2: Fill the Title**
- Example: "Q4 Product Roadmap"
- Be specific, not generic
- 3-5 words is perfect

**Step 3: Add Tags** (separated by commas)
- Example: `product, planning, 2026, urgent`
- Makes searching easy
- Helps organize ideas
- Use lowercase

**Step 4: Write Your Note**
- Think out loud
- Don't worry about perfect grammar
- Bullet points work great:
  ```
  • First idea
  • Second thought
  • Action item
  ```

**Step 5: Click Save** (blue button)
- Note is saved to your computer
- Appears in library instantly

---

### Finding Your Notes

**Method 1: Search Bar**
1. Type any word in search box
2. Results appear instantly
3. Works on title, content, and tags
4. Example: Type "urgent" → finds all urgent notes

**Method 2: Filter by Topic**
1. Use the topic dropdown
2. Select a tag
3. See only notes with that tag
4. Example: Select "product" → shows only product notes

**Method 3: Use View Filters**
- **All** → Every note
- **Pinned** → Important starred notes
- **Favorites** → Your favorite ⭐ notes

---

### Organizing with Tags

**Good Tag Examples:**
```
#project #urgent #review #idea #decision
#personal #work #learning #finance
#meeting #action #decided #todo #blocked
```

**Bad Tag Examples:**
```
#the #and #or #stuff #thing (too generic)
```

**Tag Tips:**
- Use lowercase
- One word tags work best
- Separate with commas
- You can have 3-10 tags per note

---

### Using Relationships (Linking Notes)

**Why Link?**
- See how ideas connect
- Build a knowledge network
- Find related thoughts quickly

**How to Link:**
1. Open a note
2. Scroll to "Relationship map" (bottom right)
3. Click on related notes
4. Click "Link this note"
5. Now they're connected!

**Example:**
- Note 1: "Customer feedback about feature X"
- Note 2: "Feature X design ideas"
- Link them → See the connection

---

### Using the Task Queue

**Add a Task:**
1. Open any note
2. Scroll down to "Action queue"
3. Click "Add task"
4. Task created and linked to that note

**Complete a Task:**
- Click the checkbox ☐
- It turns into ✓ (done)
- Still visible but marked complete

**Task Tips:**
- Shows 5 most urgent tasks
- Links to the note it came from
- Shows due date
- Helps you act on ideas

---

### Pin & Favorite System

**Pin (Important):**
- Click "Pin" button
- Note gets 📌 icon
- Appears in "Pinned ideas" section
- Use for: Daily focus, top priorities

**Favorite (Love):**
- Click "Favorite" button
- Note gets ⭐ icon
- Appears in "Favorites" view
- Use for: Ideas you love, reference notes

**Best Practice:**
- Pin 3-5 notes (focus)
- Favorite 10-15 notes (references)

---

### Using Insights (AI Summary)

**What it does:**
- Reads your note
- Creates a summary
- Extracts key themes
- Suggests next actions

**How to use:**
1. Click any note
2. Click "Insight" button
3. AI analysis appears at bottom
4. Review and edit if needed
5. Save if you want to keep it

**Example:**
- Original: Rambling 3000-word brainstorm
- Insight: Extracts 5 key themes + suggested actions

---

### Export & Backup

**Why Backup?**
- Protect from data loss
- Share with team
- Multiple devices
- Archive old notes

**Export (Save to Computer):**
1. Click "Export" button (top right)
2. File downloads: `second-brain-notes.json`
3. Save to Documents or Desktop
4. Keep multiple backups (weekly)

**Import (Restore from Backup):**
1. Click "Import" button
2. Choose your backup file
3. All notes restore
4. Overwrites current notes (be careful!)

**Backup Schedule:**
- Daily: Export before sleep
- Weekly: Save to external drive
- Monthly: Archive older exports

---

## Features Overview

### Dashboard Features

| Feature | Purpose | Location |
|---------|---------|----------|
| **Today at a Glance** | See statistics | Top left |
| **Daily Review** | Quick actions | Top right |
| **Search Bar** | Find notes | Below header |
| **Library** | View all notes | Left sidebar |
| **Editor** | Write/edit | Center/right |
| **Action Queue** | Manage tasks | Bottom left |
| **Relationship Map** | See connections | Bottom right |
| **Pinned Ideas** | Daily focus | Very bottom |

---

### Storage Details

**Where are my notes stored?**
- All notes saved locally on your computer
- Browser's local storage (secure)
- NOT on the internet (private)
- NOT on company servers

**Storage Limits:**
- Trial: 1000 notes
- Trial: Up to 50MB total
- Upgrade: Unlimited (future)

**Data Privacy:**
- 100% private
- No tracking
- No data collection
- No servers involved

---

## Voice Recognition Setup

### Enabling Voice Input

**Browser Permission (One-time):**

1. **Chrome/Edge:**
   - Open app at http://localhost:3000
   - Click microphone 🎤 icon
   - Click "Allow" when prompted
   - Microphone enabled!

2. **Safari:**
   - System Preferences > Security & Privacy > Microphone
   - Find and enable your browser
   - Grant permission

3. **Firefox:**
   - Click microphone icon
   - Accept permission prompt
   - Ready to use!

### Using Voice Notes

**Starting a Voice Note:**
1. Click "New note"
2. Look for microphone 🎤 icon (near title field)
3. Click to start recording
4. Speak naturally
5. Click stop when done
6. Speech converts to text

**Supported Languages:**
- English (US, UK, Australian)
- Urdu (Pakistan)
- Punjabi (India, Pakistan)
- Hindi
- Spanish
- French
- German
- Mandarin
- Japanese

**How to Select Language:**
1. Click microphone icon
2. Choose language from dropdown
3. Start speaking
4. App listens and converts

### Voice Best Practices

**For Best Results:**
- Speak clearly and naturally
- Quiet environment (no background noise)
- 2-3 feet from microphone
- Speak at normal pace
- One thought per recording

**Example Voice Note:**
```
Speak: "Product idea. Make email scheduling easier. 
Users want to send emails at optimal times. 
Tag this as product, email, automation."

Result:
Title: Product idea
Content: Make email scheduling easier...
Tags: product, email, automation
```

---

## AI Integration & Suggestions

### What AI Does

The app uses AI to:
1. **Convert speech to text** (voice input)
2. **Generate insights** (summaries)
3. **Suggest tags** (auto-tagging)
4. **Find relationships** (link detection)
5. **Extract themes** (key ideas)
6. **Create action items** (from notes)

### AI Features Explained

**1. Speech-to-Text (Voice Input)**
- Listens to your speech
- Converts to written text
- Supports multiple languages
- Real-time transcription

**Example:**
```
Speak: "I think we should pivot the product toward 
enterprise customers because the SMB market is saturated."

Result: 
Title: Product pivot strategy
Content: I think we should pivot the product...
Auto-tags: #strategy #product #decision
```

**2. Smart Suggestions**

After speaking or typing, AI suggests:
- Related notes to link
- Relevant tags
- Action items from the note
- Similar ideas in your library

**How to use:**
1. Write or speak a note
2. Look for "Suggestions" section
3. Click to accept suggested links/tags
4. Or ignore if not relevant

**3. Insight Generation**

Click "Insight" to get:
- Summary of main points
- Key themes extracted
- Suggested next steps
- Related topics

**Example:**
```
Input: Rambling note about customer feedback
Output:
Main theme: Customers want better mobile experience
Key issues: Slow app, confusing navigation
Next step: Create mobile optimization roadmap
Related notes: "Mobile strategy", "User feedback Q3"
```

**4. Auto-Tagging**

AI suggests tags based on:
- Content of your note
- Similar notes in library
- Your tagging patterns

**How to enable:**
1. Write a note
2. Look for "Suggested tags" section
3. Click to add or dismiss
4. Learn your preferences over time

**5. Relationship Detection**

AI automatically finds:
- Notes with similar topics
- Related ideas
- Contradicting thoughts
- Follow-up opportunities

**Example:**
```
Note 1: "Feature request: dark mode"
Note 2: "UI design system update"
AI connects them: Both about design/UI
Suggestion: "These might be related"
```

### AI Configuration

**Access AI Settings:**
1. Look for settings icon ⚙️ (coming soon)
2. Toggle AI features on/off
3. Choose suggestion sensitivity
4. Select AI model (basic vs. advanced)

**AI Models Available (Trial):**
- Basic: Faster, 80% accuracy
- Advanced: Slower, 95% accuracy (default)

**Recommendation:** Start with Basic, upgrade to Advanced after 7 days.

### Using AI for Multilingual Input

**Speaking in Multiple Languages:**

**Setup:**
1. Click microphone 🎤
2. Select language
3. Speak
4. AI understands and converts

**Example Workflow (Urdu):**
```
Language: Urdu
Speak: "میرا آج کا بہترین خیال یہ ہے کہ ہم ایک نیا پروڈکٹ بنائیں"
(My best idea today is that we create a new product)

Result:
Content: [Urdu text converted to Urdu, auto-tagged]
Translation: [English translation generated]
Suggestion: Link to "Product ideas" note
```

**Language Mix (Hinglish):**
```
Language: Hinglish
Speak: "Kal hamne jo dekha product demo wo bahut acha tha"
(The product demo we saw yesterday was very good)

Result:
Content: Recorded and tagged
Tags: #product #demo #feedback
```

---

## Troubleshooting

### Common Issues & Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| **App won't load** | Terminal closed | Run `npm run dev` again |
| **Blank page** | Browser cache | Refresh (Cmd+R or Ctrl+R) |
| **Notes not saving** | Storage full | Export and delete old notes |
| **Microphone not working** | Permission denied | Check browser settings |
| **Slow performance** | Too many notes | Use search/filters instead |
| **Lost notes** | Browser cleared | Restore from backup export |
| **Voice not recognizing** | Accent/noise | Speak slower, quieter room |

### How to Restart the App

**If something breaks:**

1. Close the browser tab
2. Go back to Terminal/Command Prompt
3. Press `Ctrl+C` (stop the app)
4. Type: `npm run dev`
5. Open http://localhost:3000 again

---

### Checking Your Computer Setup

**Verify everything works:**

```
Test 1: Node.js installed
Command: node --version
Expected: v16.0.0 or higher

Test 2: npm installed
Command: npm --version
Expected: 7.0.0 or higher

Test 3: Git installed
Command: git --version
Expected: git version 2.0+
```

If any fail, reinstall that software.

---

## FAQ

### General Questions

**Q: Is my data private?**
A: Yes! 100% private. All data stored locally on your computer. No internet upload.

**Q: Can I use on mobile phone?**
A: Yes, but not native app (yet). Use browser on iPhone/Android.

**Q: Can I sync between devices?**
A: Not yet. Export from one device, import on another.

**Q: How much data can I store?**
A: Trial: Up to 1000 notes / 50MB. Upgrade removes limits.

**Q: Does it work offline?**
A: Yes! Basic features work offline. AI features need internet.

---

### Voice & AI Questions

**Q: What if voice recognition doesn't work?**
A: Check microphone permission in browser settings. Restart browser.

**Q: Can I edit text after voice input?**
A: Yes! Voice converts to editable text. Make changes anytime.

**Q: Does AI work in all languages?**
A: English, Urdu, Punjabi, Hindi, Spanish, French, German, Chinese, Japanese supported.

**Q: How accurate is voice recognition?**
A: 90-95% with clear speech. Improves with practice.

**Q: Can I turn off AI suggestions?**
A: Yes. Settings (coming soon) let you toggle each AI feature.

**Q: Is my voice recorded permanently?**
A: No. Only text is saved. Audio is processed and deleted.

---

### Technical Questions

**Q: What browser works best?**
A: Chrome > Firefox > Safari > Edge. Chrome recommended.

**Q: Can I run on Windows/Mac/Linux?**
A: Yes, all supported equally.

**Q: What if I have an old computer?**
A: Minimum 4GB RAM. Works but slower.

**Q: How do I uninstall?**
A: Delete the "second-brain" folder. That's it!

**Q: Can I run on two computers?**
A: Yes, but separately. Export from one, import on other.

---

### Support Questions

**Q: I lost my notes, can I recover?**
A: Yes! If you exported before, import the backup file.

**Q: The app is crashing, what do I do?**
A: Close browser, stop Terminal (Ctrl+C), run `npm run dev` again.

**Q: How do I report a bug?**
A: Open issue at GitHub: https://github.com/shahbazphone-oss/second-brain/issues

**Q: Can I request a feature?**
A: Yes! Same GitHub link. Click "New issue" > "Feature request"

---

## Trial Limitations & Upgrade Path

### Trial Version Limits

| Feature | Trial | Upgrade |
|---------|-------|---------|
| **Max Notes** | 1000 | Unlimited |
| **Storage** | 50MB | 5GB |
| **Voice Input** | Yes | Yes |
| **AI Suggestions** | Basic | Advanced |
| **Sync** | Local only | Cloud sync (future) |
| **Sharing** | Export only | Team sharing (future) |
| **Mobile App** | Browser | Native app (future) |
| **Cost** | Free | $9.99/mo or $99/year |

### Trial Period: 30 Days

**Day 1-7:** Get familiar
- Create 10-20 notes
- Try voice input
- Set up tags
- Explore AI suggestions

**Day 8-21:** Build habits
- Add notes daily
- Review pinned ideas
- Link related notes
- Export backups

**Day 22-30:** Decide
- Try all features
- Test with real work
- Export full library
- Decide to upgrade or continue free

### Free Version (After Trial)

After 30 days, you can:
- Keep using free version
- 1000 note limit
- Local storage only
- All core features work
- No AI features

**OR upgrade to:**

**Upgrade Options:**
1. **Monthly**: $9.99/month (after trial: $7.99)
2. **Yearly**: $99/year (saves 66%)
3. **Lifetime**: $199 one-time (beta pricing)

**Upgrade Benefits:**
- Unlimited notes
- Cloud backup (automatic)
- AI premium features
- Mobile app (iOS/Android)
- Team collaboration
- Priority support

### How to Upgrade

**After trial ends:**
1. Click "Upgrade" button (top right)
2. Choose plan (monthly/yearly/lifetime)
3. Pay via card (Stripe, secure)
4. Instant upgrade!
5. No reinstall needed

**If you don't upgrade:**
- Your notes stay (free version)
- But new notes limited to 1000 total
- AI features turn off
- Can always upgrade later

---

## Tips for Best Results

### Productivity Tips

✅ **DO:**
- Capture ideas immediately (don't wait)
- Use consistent tags (helps searching)
- Review pinned notes daily
- Link related ideas weekly
- Export backup every week
- Speak naturally (don't script voice input)

❌ **DON'T:**
- Delay capturing ideas
- Use random tags
- Let notes get disorganized
- Ignore relationships between ideas
- Skip backups
- Whisper or mumble when using voice

### Organization Tips

**Tag Strategy:**
- Project tags: #project-x #client-y
- Status tags: #urgent #review #done
- Type tags: #idea #decision #learning
- Time tags: #q4-2026 #weekly

**Note Structure:**
```
Title: [Specific, 3-5 words]
Tags: [3-5 relevant tags]
Content:
- Key point 1
- Key point 2
- Action: [What to do next]
```

### Voice Input Tips

**Best Practices:**
- Speak one thought at a time
- Use natural pauses
- Say punctuation: "comma", "period"
- Use specific words (not slang)
- Check transcription before saving
- Edit if voice got it wrong

**Example Good Voice Note:**
```
"Product idea for mobile app. Comma.
Users want easier note collaboration. Period.
Add this to the product ideas tag."

Result: Clean, accurate, properly tagged
```

---

## Contact & Support

### Getting Help

**Documentation:**
- User Manual: This document
- GitHub Wiki: https://github.com/shahbazphone-oss/second-brain/wiki

**Report Issues:**
- GitHub Issues: https://github.com/shahbazphone-oss/second-brain/issues

**Feature Requests:**
- GitHub Discussions: https://github.com/shahbazphone-oss/second-brain/discussions

**Email Support:**
- support@secondbrain.app (coming soon)

---

## License & Terms

**Second Brain** is provided as-is for personal use during trial period.

**Trial Agreement:**
- 30-day free trial
- Unlimited use during trial
- Data remains your property
- Free export anytime
- No payment info required

**After Trial:**
- Choose free or paid version
- Free version: All features, 1000-note limit
- Paid version: Unlock all features

**Privacy Policy:**
- Your data is private
- No tracking
- No analytics
- No selling data
- Full control over export/delete

---

## Quick Reference Card

**Print this and keep nearby!**

```
DAILY WORKFLOW:
1. Open: http://localhost:3000
2. Check: Today at a Glance
3. Add: New note (voice or type)
4. Tag: Use relevant tags
5. Save: Auto-saves after 2 sec
6. Link: Connect related notes
7. Export: Weekly backup

VOICE INPUT:
- Click 🎤 icon
- Select language
- Speak clearly
- AI converts to text
- Edit and save

SHORTCUTS:
Cmd+N / Ctrl+N : New note
Cmd+S / Ctrl+S : Save
Cmd+F / Ctrl+F : Search
Cmd+E / Ctrl+E : Export
Cmd+I / Ctrl+I : Import

KEYBOARD SHORTCUTS:
Tab: Next field
Shift+Tab: Previous field
Enter: Save note
Escape: Cancel editing
```

---

## Appendix A: Complete Keyboard Shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| New Note | Ctrl+N | Cmd+N |
| Save Note | Ctrl+S | Cmd+S |
| Search | Ctrl+F | Cmd+F |
| Export | Ctrl+E | Cmd+E |
| Import | Ctrl+I | Cmd+I |
| Next Field | Tab | Tab |
| Previous Field | Shift+Tab | Shift+Tab |

---

## Appendix B: File Locations

**Where Second Brain stores files:**

**Windows:**
```
C:\Users\[YourUsername]\AppData\Local\[Browser]\Local Storage
```

**Mac:**
```
~/Library/Application Support/[Browser]/Local Storage
```

**Linux:**
```
~/.config/[Browser]/Local Storage
```

**Backup Files (when exported):**
```
Windows: C:\Users\[YourUsername]\Downloads\second-brain-notes.json
Mac: ~/Downloads/second-brain-notes.json
Linux: ~/Downloads/second-brain-notes.json
```

---

## Appendix C: Language Support

**Fully Supported:**
- English (US, UK, Australian)
- Urdu (Pakistan)
- Punjabi (India, Pakistan)
- Hindi
- Spanish
- French
- German
- Mandarin Chinese
- Japanese

**Partial Support (Text only, no voice):**
- Arabic
- Portuguese
- Italian

---

## Document Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Oct 2026 | Initial release |
| 1.1 | TBD | Add cloud sync docs |
| 1.2 | TBD | Add team features |

---

**Thank you for using Second Brain!**

**Questions? Email:** support@secondbrain.app  
**Report Bugs:** https://github.com/shahbazphone-oss/second-brain/issues  
**Feedback:** https://github.com/shahbazphone-oss/second-brain/discussions

---

*This manual is a living document. Updates will be posted to GitHub Wiki.*

**Happy capturing! 🧠✨**
