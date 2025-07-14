
# Angular QR Code Generator App

This project is a well-structured **Angular 17** application for generating, managing, and previewing QR codes. It leverages Angular Material for a polished UI, local storage for history, and includes advanced features like QR downloading, duplicate validation, and real-time filtering.

---

## 🧱 Project Structure

```
src/app/
│
├── core/                          # Reusable global services (e.g., storage)
├── shared/                        # Shared components like dialogs
├── features/
│   └── qr-generator/
│       ├── components/            # Form, preview components
│       ├── models/                # QrEntry model
│       ├── pages/                 # Route-level pages (form, preview)
│       ├── services/              # Local storage service for QR history
│       └── qr-generator.component.ts  # Main dashboard view
│
└── app.routes.ts                  # Application routing
```

---

## ✅ Prerequisites

- Node.js (v18+)
- Angular CLI (v17)
- Angular Material (`ng add @angular/material`)

---

## 🚀 How to Run the App

### 📦 Install Dependencies

```bash
npm install
```

### ▶️ Start the Dev Server

```bash
ng serve
```

Visit: [http://localhost:4200](http://localhost:4200)

---

## 🔧 Key Features

- ✅ Generate QR codes for: **text, URL, email, phone, SMS**
- ✅ **Local Storage caching** of all generated codes
- ✅ **Prevent duplicate** (type + value) QR entries
- ✅ **Search/filter** QR list by type or value
- ✅ **Material table** with columns: Type, Value, Date, Action
- ✅ **Preview full QR** in a dedicated route (`/preview/:id`)
- ✅ **Download QR** as PNG from both form and list
- ✅ **Snackbar notifications** for success and validation
- ✅ **Confirmation dialog** before deletion
- ✅ **Fixed footer** with credit text: "Designed By Ravi Bhushan."

---

## 💡 Design Decisions

- **Standalone Components** (Angular 17 best practice)
- **Angular Material** used for layout, forms, tables, dialogs
- **Router-based navigation** between `/`, `/generate`, and `/preview/:id`
- **LocalStorage** used for persistent history (with optional image data)
- **Separation of concerns**: services, models, UI are modularized

---

## 🔐 Business Rules

- ❌ Cannot generate duplicate QR codes with same type + value
- ✅ QR image is also saved as base64 in history
- ✅ All form fields are required

---

## 📸 Example QR Entry Stored

```json
{
  "id": "1699970939993",
  "type": "url",
  "value": "https://example.com",
  "result": "https://example.com",
  "createdAt": "2024-07-14T10:12:30.000Z",
  "image": "data:image/png;base64,..."
}
```

---

## 🧑‍💻 Author

Developed by **Ravi Bhushan** — Angular QR Code Generator Project.

---

## 📜 License

Free to use for learning, demonstration, and portfolio purposes.
