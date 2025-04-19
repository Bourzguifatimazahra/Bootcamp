

## 📋 **Tables données :**

### **FirstTab**
| id    | name    |
|-------|---------|
| 5     | Pawan   |
| 6     | Sharlee |
| 7     | Krish   |
| NULL  | Avtaar  |

### **SecondTab**
| id    |
|-------|
| 5     |
| NULL  |

---

## 🧠 **Rappel important sur `NOT IN` avec `NULL`** :
- Si la **sous-requête** retourne un `NULL`, alors la condition `NOT IN` devient **indéterminée (UNKNOWN)** pour **toutes les valeurs**.
- Par exemple :  
  ```sql
  WHERE id NOT IN (5, NULL)
  ```
  retourne **aucune ligne**, car on ne peut pas dire si `id != NULL`.

---

## ✅ **Réponses prédites + explications :**

---

### 🔹 **Q1** :  
```sql
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NULL)
```

🔍 Sous-requête :
```sql
SELECT id FROM SecondTab WHERE id IS NULL
--> Résultat : 1 ligne : NULL
```

Donc la clause devient :
```sql
WHERE ft.id NOT IN (NULL)
```

➡️ Toute comparaison avec `NULL` en `NOT IN` donne **FALSE / UNKNOWN**, donc :

✅ **Résultat attendu : `0`**

---

### 🔹 **Q2** :
```sql
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id = 5)
```

🔍 Sous-requête :
```sql
SELECT id FROM SecondTab WHERE id = 5
--> Résultat : 5
```

Donc la clause devient :
```sql
WHERE ft.id NOT IN (5)
```

### Valeurs dans `FirstTab.id` :  
5, 6, 7, NULL

➡️ Seuls `6` et `7` ne sont pas dans la liste.  
`NULL` est ignoré dans le `COUNT(*)` (car `NULL NOT IN (5)` est `UNKNOWN`).

✅ **Résultat attendu : `2`**

---

### 🔹 **Q3** :
```sql
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab)
```

🔍 Sous-requête :
```sql
SELECT id FROM SecondTab
--> Résultat : 5, NULL
```

Donc la clause devient :
```sql
WHERE ft.id NOT IN (5, NULL)
```

➡️ Toute comparaison avec une liste contenant `NULL` => **UNKNOWN**

✅ **Résultat attendu : `0`**

---

### 🔹 **Q4** :
```sql
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NOT NULL)
```

🔍 Sous-requête :
```sql
SELECT id FROM SecondTab WHERE id IS NOT NULL
--> Résultat : 5
```

Donc :
```sql
WHERE ft.id NOT IN (5)
```

➡️ Même situation que Q2

✅ **Résultat attendu : `2`**

---

## 🔧 Résumé des réponses :

| Question | Résultat attendu |
|----------|------------------|
| Q1       | 0                |
| Q2       | 2                |
| Q3       | 0                |
| Q4       | 2                |

---