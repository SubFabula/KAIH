/*let calculationMode = "byCount";

document.getElementById("byCount").addEventListener("click", () => {
  calculationMode = "byCount";
  document.getElementById("byCount").classList.add("selected");
  document.getElementById("byBill").classList.remove("selected");

  document.getElementById("countInputs").style.display = "block";
  document.getElementById("billInputs").style.display = "none";
});

document.getElementById("byBill").addEventListener("click", () => {
  calculationMode = "byBill";
  document.getElementById("byBill").classList.add("selected");
  document.getElementById("byCount").classList.remove("selected");

  document.getElementById("countInputs").style.display = "none";
  document.getElementById("billInputs").style.display = "block";
});*/

// got from chatgpt ^

/* dont forget the styles v-- got from chatgpt too
#switch-math-type-div input {
  border: 1px solid #ccc;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: #ddd;
  border-bottom: 3px solid #999;
}

#switch-math-type-div input.selected {
  background-color: #fff; / match container bg /
  border-bottom: none;
  z-index: 2;
  position: relative;
}

#countInputs, #billInputs {
  background-color: #fff;
  padding: 16px;
  border: 1px solid #ccc;
  border-top: none;
}

*/




/* just to not forgett it v-- from the chatGPT



Yes, exactly! That's a **great approach**, and yes — in JavaScript you can absolutely:

* Add IDs to each `<p>` question block,
* Then use JS to dynamically update the `.innerHTML` (or `.innerText`, depending),
* You can even remove and recreate inputs, selects, etc., if needed.

---

### ✅ Example approach (simple and scalable)

Let’s say your HTML looks like this:

```html
<p id="q1">1. Her ay en az kaç kilo kömür kullanıyorsunuz?<br>
  <label><input type="number" id="coalInput" placeholder="Lütfen boş bırakmayın!"></label>
</p>

<p id="q2">2. Her ay en az kaç kilovat elektrik sarf ediyorsunuz?<br>
  <label><input type="number" id="electricInput" placeholder="Lütfen boş bırakmayın!"></label>
</p>
```

---

### ✅ In JavaScript

```js
const switchToBill = () => {
  document.getElementById("q1").innerHTML = `
    1. Aylık kömür faturanıza ortalama ne kadar ödüyorsunuz?<br>
    <label><input type="number" id="coalBillInput" placeholder="₺ cinsinden yazınız"></label>
  `;

  document.getElementById("q2").innerHTML = `
    2. Elektrik faturanıza aylık ortalama ne kadar ödüyorsunuz?<br>
    <label><input type="number" id="electricBillInput" placeholder="₺ cinsinden yazınız"></label>
  `;
};

const switchToCount = () => {
  document.getElementById("q1").innerHTML = `
    1. Her ay en az kaç kilo kömür kullanıyorsunuz?<br>
    <label><input type="number" id="coalInput" placeholder="Lütfen boş bırakmayın!"></label>
  `;

  document.getElementById("q2").innerHTML = `
    2. Her ay en az kaç kilovat elektrik sarf ediyorsunuz?<br>
    <label><input type="number" id="electricInput" placeholder="Lütfen boş bırakmayın!"></label>
  `;
};
```

Then connect it to your buttons:

```js
document.getElementById("byCount").addEventListener("click", () => {
  switchToCount();
  mathType = "byCount"; // or whatever variable you're using
});

document.getElementById("byBill").addEventListener("click", () => {
  switchToBill();
  mathType = "byBill";
});
```

---

### 🧠 Bonus tip

If you want to **reduce duplication**, you can even use templates or predefined strings stored in an object. Example:

```js
const questionTemplates = {
  byCount: {
    q1: `...`,
    q2: `...`
  },
  byBill: {
    q1: `...`,
    q2: `...`
  }
};
```

Let me know if you want that pattern set up too — it can make managing many questions easier.

Would you like me to give you a base JS snippet with all 5 questions using this method?



*/