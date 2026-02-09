# Unified Utility Payments Platform
**Frontend Prototype (In Progress)**

A frontend-focused prototype for a **unified utility payments platform** that allows users to view and pay multiple utility bills—such as electricity and water—from a single dashboard.

> ⚠️ **Important:**
> All data in this prototype is **simulated**.
> - No real user data is used
> - No real utility systems are connected
> - No real payment gateways are integrated

---

## 📖 Table of Contents
- [Introduction](#introduction)
- [Project Goals](#project-goals)
- [Why This Project Exists](#why-this-project-exists)
- [What the Platform Allows Users to Do](#what-the-platform-allows-users-to-do)
- [Supported Utility Types](#supported-utility-types)
- [Dashboard Overview](#dashboard-overview)
- [Implementation Status](#implementation-status)
- [Data & Payment Notes](#data--payment-notes)
- [Out of Scope](#out-of-scope)
- [Future Potential](#future-potential)
- [Technical Notes](#technical-notes)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction

This project explores how **fragmented utility payment workflows** in Kenya can be simplified through:
- Clear UI structure
- Explicit state handling
- Decision-oriented design

The focus is on **clarity, correctness, and extensibility**, rather than live integrations or full production readiness.

---

## 🎯 Project Goals

The prototype demonstrates how a single platform could help users:

- Manage multiple utility accounts in one place
- Understand different payment models (prepaid vs postpaid)
- Take the **correct next action** without confusion or error

---

## Why This Project Exists

In **Kenya**, utility payments are often fragmented across:

- **Different services:** electricity vs water
- **Different payment types:** prepaid vs postpaid
- **Different providers:** government utilities vs private sub-meter vendors (e.g. apartments)

This fragmentation forces users to:
- Remember multiple meter or account numbers
- Use different payment methods and flows
- Track and reconcile payments manually

🎯 **This prototype shows how all of this complexity can be organized clearly in one place.**

---

## What the Platform Allows Users to Do

### 1. Manage All Utilities in One Place
Users can:
- Add multiple electricity and water meters or accounts
- View all utilities in a single dashboard
- Clearly see which utilities are **prepaid** vs **postpaid**

---

### 2. Pay Utilities the Right Way
The platform models **real-world payment behavior**:

**Prepaid (Pay Before Use)**
- Buy electricity or water tokens

**Postpaid (Pay After Use)**
- Pay full or partial bills

➡️ The interface **surfaces the correct action** based on the account type, reducing payment errors.

---

### 3. View Payment History
Users can:
- View a timeline of past payments
- Access receipts
- Track what was paid, when, and for which utility

---

## Supported Utility Types

| Utility      | Payment Type | Provider Type          |
|--------------|--------------|------------------------|
| Electricity  | Prepaid      | Main utility meter     |
| Electricity  | Prepaid      | Sub-meter vendor       |
| Electricity  | Postpaid     | Utility account        |
| Water        | Prepaid      | Sub-meter vendor       |
| Water        | Postpaid     | Utility account        |

Each utility behaves differently, and these differences are **explicitly modeled** in the UI and logic.

---

## Dashboard Overview

The dashboard is designed for **decision-making**, not just data display.

It surfaces:
- Total number of utility accounts
- Outstanding balances (if any)
- Recent payments
- Suggested next action (e.g. **Buy Token**, **Pay Bill**)

🎯 **Goal:** Make the user’s next decision obvious.

---

## Implementation Status

### ✅ Implemented
- Landing page...
- Sign-in page ✅
- Login page ✅

---

### 🚧 In Progress
- Dashboard UI
- Utility management views
- Payment and transaction flows

---

## Data & Payment Notes

- ✅ All data is **dummy data**
- ❌ No real utility systems are connected
- ❌ No real payments are processed
- ❌ No personal or financial data is stored

This keeps the prototype **safe, secure, and focused on design and logic validation**.

---

## Out of Scope

To keep scope lean, the following are intentionally excluded:

- Real payment gateways (mobile money, cards)
- Live integrations with utility or vendor APIs
- Real-time consumption tracking
- Advanced user verification (e.g. KYC)

---

## Future Potential

With validation, this prototype could evolve by adding:

- Mobile money and bank integrations
- API connections to utility companies and vendors
- Auto-payment scheduling
- Live consumption tracking and analytics
- Admin dashboards for reconciliation
- Mobile applications (Android / iOS)

---

## Technical Notes (Currently)

- **Frontend:** Vanilla HTML, CSS, and JavaScript
  - Responsive
  - Accessible
  - Intuitive

- **Logic Layer:**
  - Simple backend-style logic to model different utility behaviors

- **Data Model:**
  - Users
  - Utilities
  - Transactions

The architecture is **modular and extensible**, allowing real integrations later without redesigning the UI.

---

## Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate into the project
cd unified-utility-payments-platform

# Open the project
Open index.html in your browser
```

---

## Contributing

Contributions, feedback, and suggestions are welcome!
Open an issue for bugs or ideas
Submit a pull request for improvements
Share UX or product feedback

---

## License

This project is provided for educational and prototyping purposes.
License details can be added as the project matures.