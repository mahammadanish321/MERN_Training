# Lab 4: CSS & Responsive Design — Beginner Lab Report

**Student Practice Lab:** Student Study Dashboard  
**Folder:** `/home/mahammadanish/Coding/MERN/myMERN/cssPratice`  
**Files:** `index.html`, `style.css`, `README.md`

---

## 1. Project Overview & Setup (Part 1 & 2)

I created a simple **Student Study Dashboard** using semantic HTML tags and external CSS.

### Required IDs & Classes Used:
* **IDs:**
  * `#page-header` — Top header with dashboard title and description.
  * `#main-nav` — Main navigation menu bar.
  * `#study-area` — Section holding the 3 study cards.
  * `#schedule` — Timetable showing weekly topics.
  * `#page-footer` — Footer at the bottom of the page.
* **Reusable Classes:**
  * `.container` — Centers the page content (`width: 95%; margin: 10px auto;`).
  * `.study-card` — Card style for each subject module.
  * `.resource-list` — List containing links and nested documentation.
  * `.notice` — Notice alert box with yellow background and dashed border.

---

## 2. CSS Selectors & Specificity Notes (Part 2 & 3)

### Selectors Learned:
1. **Element selectors:** `h1`, `h2`, `h3`, `p`, `a` for basic typography.
2. **Class selectors:** `.study-card` for all cards, and `.card-featured` to highlight one card without repeating all CSS rules.
3. **ID selector:** `#notice` for unique styling.
4. **Descendant vs Child Selectors:**
   * `.resource-list li` (Descendant): Affects every `<li>` inside the list, including nested items.
   * `.resource-list > li` (Direct Child): Affects only the top-level `<li>` items to make them look like separate boxes.
5. **Pseudo-Classes:**
   * `:hover` — Changes navigation link background when mouse is over it.
   * `:first-child` — Adds a green top border to the first card in the row.
   * `tr:nth-child(even)` — Gives alternating yellow background to table rows (zebra striping).
   * `:focus` — Adds a red outline and yellow background when navigating with the keyboard Tab key.

### Specificity Investigation (Task 9):
* **Specificity order:** `ID (#)` (100) > `Class (.)` (10) > `Element (tag)` (1).
* **Source order:** If two selectors have equal specificity, the one written lower down in `style.css` wins.
* **Inheritance:** Some properties like `color` and `font-family` pass from parent to child, but have lower priority than direct selectors.
* No `!important` was used.

---

## 3. Box Model & Spacing Experiments (Part 4 & 5)

1. **`box-sizing: border-box` vs `content-box`:**
   * In `content-box` (default), adding padding and border makes the total box wider than the set `width`.
   * In `border-box` (`* { box-sizing: border-box; }`), padding and border are included inside the `width`, so elements don't accidentally overflow the screen.
2. **Margin Collapsing:**
   * When an element with `margin-bottom: 20px` is placed above an element with `margin-top: 10px`, the gap is `20px` (the largest margin), not `30px`.
3. **Colors:**
   * Named colors: `blue`, `yellow`, `red`, `green`, `purple`, `white`, `black`.
   * HEX colors: `#cceeff`, `#e6f2ff`, `#ffff99`.

---

## 4. Layouts: Flexbox & CSS Grid (Part 6 & 7)

1. **Flexbox:**
   * **Navigation (`#main-nav ul`):** Used `display: flex; justify-content: space-around;` to arrange menu links horizontally.
   * **Cards Row (`.card-container`):** Used `display: flex; gap: 15px;` so all cards sit side-by-side.
   * **Card Vertical Alignment:** Used `display: flex; flex-direction: column; justify-content: space-between;` inside each card so the button stays at the bottom.
2. **CSS Grid:**
   * **Dashboard Overview (`.dashboard-grid`):** Used `display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;` to neatly place 6 metric boxes in 3 equal columns.

---

## 5. Positioning Systems (Part 8)

1. **Relative & Absolute:**
   * `.study-card` has `position: relative;`.
   * `.badge` has `position: absolute; top: 5px; right: 5px;` so it stays inside the top-right corner of the card.
2. **Sticky:**
   * `#main-nav` has `position: sticky; top: 0;` so it sticks to the top of the browser when scrolling down.
3. **Fixed:**
   * `.fixed-top-btn` has `position: fixed; bottom: 15px; right: 15px;` to provide a floating "↑ Top" button on screen.

---

## 6. Responsive Design (Part 9)

Used `@media` queries to make the dashboard look good on different screens:
* **Desktop (> 768px):** 3 cards in a horizontal row, 3 columns in the grid.
* **Tablet (max-width: 768px):** Cards stack vertically, grid changes to 2 columns.
* **Mobile (max-width: 480px):** Grid changes to 1 column, font sizes scale down.

---

## 7. Debugging Log: 10 Common CSS Issues (Part 10)

| # | Problem | What Happened & Cause | Fix Applied | Result |
|---|---|---|---|---|
| 1 | Wrong selector | `.studycard` didn't style the card because class was `study-card`. | Changed to `.study-card`. | Card styling applied. |
| 2 | Missing punctuation | `notice` didn't work because `.` was missing. | Added dot: `.notice`. | Notice background appeared. |
| 3 | Property typo | `text-align: centerd;` did not center text. | Fixed typo to `center`. | Text centered properly. |
| 4 | Specificity conflict | `.card-featured` color wasn't showing over `.study-card`. | Placed `.card-featured` after `.study-card` in CSS. | Featured style showed. |
| 5 | Horizontal scrollbar | Page had horizontal scroll on small screen. | Added `box-sizing: border-box;` and removed fixed widths. | Overflow disappeared. |
| 6 | Button misalignment | Card buttons were at different heights. | Added `justify-content: space-between` to card flex. | Buttons aligned evenly. |
| 7 | Grid overflow | Fixed pixel grid broke on tablet. | Used flexible `repeat(3, 1fr)` and media queries. | Grid resized smoothly. |
| 8 | Badge positioning | Badge flew to top-right of page. | Added `position: relative` to `.study-card`. | Badge stayed inside card. |
| 9 | Media query not working | Missing `px` in `@media (max-width: 768)`. | Added units: `@media (max-width: 768px)`. | Responsive layout activated. |
| 10 | CSS not loading | Linked `styles.css` instead of `style.css`. | Corrected href to `style.css`. | All styles loaded. |

---

## 8. Final Checklist

- [x] External CSS linked properly (`style.css`)
- [x] No inline `style="..."` attributes
- [x] Used semantic HTML (`header`, `nav`, `main`, `section`, `table`, `footer`)
- [x] Flexbox used for Nav and Cards
- [x] CSS Grid used for Dashboard Metrics
- [x] Sticky Nav, Fixed Button, and Absolute Badge work
- [x] Responsive on mobile, tablet, and desktop
