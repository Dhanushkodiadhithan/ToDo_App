# 📌 **To-Do App (React + Vite)**

A simple, clean To-Do application built using **React** and **Vite**.
You can add, complete, and delete tasks.
Completed tasks automatically move to the bottom.

---

# 🚀 **Features**

### ✅ Add New Tasks

Add a task using the input box and hit **ADD** button.

### ✅ Mark Tasks as Completed

Click on a task to toggle between:

* ✔️ **Completed**
* ✖️ **Not Completed**

Completed tasks move to the bottom of the list.

### ✅ Delete Tasks

Remove any task with the **X** delete button.

### ✅ Live Summary

Footer shows:

* 🔢 Total tasks
* 🟩 Completed tasks

### ✨ Smooth UI

Tasks appear/disappear instantly.
Completed tasks get a visual strike-through (CSS).

---

# 📁 **Project Structure**

```
src/
│
├── Components/
│   ├── content.jsx
│   ├── content.css
│   ├── display.jsx
│   ├── display.css
│   ├── items.jsx
│   ├── items.css
│   ├── footer.jsx
│   ├── footer.css
│   ├── header.jsx
│   ├── header.css
│
├── App.jsx
├── App.css
├── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
```

---

# 💡 **Component Breakdown**

### **📌 `Content.jsx`**

The main logic handler:

* Manages state (`text` + `datas`)
* Adds tasks
* Sorts completed tasks
* Passes tasks to `<Display />`
* Shows summary via `<Footer />`

---

### **📌 `Display.jsx`**

Renders the list of tasks.

* Shows `<Items>` only when tasks exist
* Adds conditional class: `hiddenul` or `visibleul`

```jsx
<ul className={datas.length === 0 ? "hiddenul" : "visibleul"}>
```

---

### **📌 `Items.jsx`**

Handles each individual task.

* Toggle complete
* Delete task
* Applies `"completed"` CSS class when done

```jsx
className={data.done ? "completed" : ""}
```

---

### **📌 `Footer.jsx`**

Displays summary:

* Total tasks
* Completed tasks
  (You have this file in structure but did not paste code)

---

# ⚙️ **How to Run the App**

### 1️⃣ Install dependencies

If using **npm**:

```bash
npm install
```

If using **bun**:

```bash
bun install
```

---

### 2️⃣ Start the dev server

**npm:**

```bash
npm run dev
```

**bun:**

```bash
bun dev
```

The app will open at:

```
http://localhost:5173
```

---

# 🧪 **How Tasks Work (Logic)**

### ➕ Adding a task

```jsx
setdatas([...datas, text])
```

### ✔️ Completing a task

```jsx
setdatas(
  datas.map((item) =>
    item === data ? { ...item, done: !item.done } : item
  )
);
```

### ❌ Deleting a task

```jsx
setdatas(datas.filter((item) => item !== data));
```

### 📥 Sorting tasks

Completed tasks always move to the bottom.

```jsx
datas.sort((a,b)=>Number(a.done)-Number(b.done))
```

---

# 🎨 **Styling**

Each component has its own CSS file:

```
display.css
items.css
content.css
footer.css
header.css
```

This makes the UI modular and clean.

Add styles like:

```css
.completed {
  text-decoration: line-through;
  opacity: 0.6;
}
```

---

# 📦 **Dependencies**

Your project uses:

* **React**
* **Vite**
* CSS (local styles)
* No extra libraries

---

# 🛠️ **Build for Production**

```bash
npm run build
```

or

```bash
bun build
```

Output will be inside:

```
dist/
```

---

# 🙌 **Credits**

Author: **Dhanushkodi Adhithan**
A simple and fast To-Do App built with React + Vite.
