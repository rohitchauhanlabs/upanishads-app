# INSIGHT #1 - LAYER 1: THE HOOK
## "The 2 AM Choice That's Destroying Your Peace"

**Format:** 7 swipeable text cards (Instagram Stories style)  
**Duration:** 60 seconds total (8-9 seconds per card)  
**Audio:** Optional - same text read aloud by ElevenLabs voice  

---

### **CARD 1**
```
You made this choice today.

[Swipe to continue →]
```

**Audio script:** "You made this choice today."  
**Timing:** 0:00-0:08

---

### **CARD 2**
```
At 2 AM, scrolling instead of sleeping.

Ordering takeout instead of having 
the difficult conversation.

Numbing out instead of feeling.

[→]
```

**Audio script:** "At 2 AM, scrolling instead of sleeping. Ordering takeout instead of having the difficult conversation. Numbing out instead of feeling."  
**Timing:** 0:08-0:17

---

### **CARD 3**
```
This wasn't random.

It was a choice between two paths.

[→]
```

**Audio script:** "This wasn't random. It was a choice between two paths."  
**Timing:** 0:17-0:25

---

### **CARD 4**
```
SHREYA vs. PREYA

The good vs. the pleasant.

What builds you vs. what numbs you.

[→]
```

**Audio script:** "Shreya versus preya. The good versus the pleasant. What builds you versus what numbs you."  
**Timing:** 0:25-0:34

---

### **CARD 5**
```
Every time you choose the pleasant,
your anxiety compounds.

Every time you choose the good,
it decreases.

[→]
```

**Audio script:** "Every time you choose the pleasant, your anxiety compounds. Every time you choose the good, it decreases."  
**Timing:** 0:34-0:43

---

### **CARD 6**
```
You've been choosing wrong
your whole life.

Not because you're weak.

Because nobody taught you
to see the choice.

[→]
```

**Audio script:** "You've been choosing wrong your whole life. Not because you're weak. Because nobody taught you to see the choice."  
**Timing:** 0:43-0:52

---

### **CARD 7**
```
There's a 3,000-year-old solution.

Want to learn it?

[Continue to Full Insight]
```

**Audio script:** "There's a three-thousand-year-old solution. Want to learn it?"  
**Timing:** 0:52-1:00

---

## **Technical Implementation Notes:**

### **Visual Design (Each Card):**
```css
Background: Clean white or soft gradient
Text: Large, bold, centered
Font: Sans-serif (Inter, SF Pro, or similar)
Text color: Dark gray/black
Accent color: Burnt orange or deep teal (brand color)
Padding: Generous whitespace
Animation: Gentle fade-in on card transition
```

### **Audio Controls:**
```
Top-right corner: 🔊 icon (tap to play/pause)
Progress bar: Subtle line at top showing card position (1/7, 2/7, etc.)
Auto-advance: OFF (user taps to advance cards)
Audio auto-plays: NO (user must tap icon)
```

### **Navigation:**
```
Swipe right OR tap right side: Next card
Swipe left OR tap left side: Previous card
Card 7: "Continue" button appears (no more swipe)
Can exit anytime: X button top-left
```

### **ElevenLabs Voice Selection:**
```
Voice options presented before Layer 1:
- "Choose your guide's voice"
- 6-8 voice options with 3-second preview each
- Male/Female across: American, British, Australian, Indian, European, Chinese accents
- Choice persists across all insights (but can be changed in settings)
```

---

## **Layer 1 → Layer 2 Transition:**

**After Card 7, button appears:**

```
┌─────────────────────────────────┐
│                                 │
│   [Continue to Core Insight]    │
│                                 │
│   (Takes ~90 seconds to read)   │
│                                 │
└─────────────────────────────────┘
```

**User taps → Proceeds to Layer 2**

---

## **Audio File Specs (for ElevenLabs generation):**

**Input text:** Full script from Cards 1-7 (combined)  
**Output format:** MP3, 128kbps  
**Duration:** 60 seconds  
**Pacing:** Conversational, slight pauses between sentences  
**Tone:** Direct but warm, not preachy  
**Emphasis:** Slight emphasis on "SHREYA vs. PREYA" and "3,000-year-old solution"

---

## **Accessibility:**

- All text readable by screen readers
- Audio provides alternative consumption method
- High contrast text (WCAG AA compliant)
- Large tap targets (minimum 44x44px for buttons)

---

## **Analytics Tracking (Recommended):**

- Card view count (how many see each card)
- Drop-off rate (which card loses users)
- Audio play rate (% who tap audio icon)
- Completion rate (% who reach Card 7)
- Continue rate (% who proceed to Layer 2)

---

**END OF LAYER 1 SCRIPT**
