
import os

path = r"c:\Users\PARAS\Documents\GitHub\Portfolio\assets\css\style.css"
new_css = """
.modern-linkedin-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 24px;
  border-radius: 4px;
  background: #ffffff;
  color: #0077b5;
  border: 1px solid #0077b5;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  margin-top: 15px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.modern-linkedin-btn:hover {
  background: #0077b5;
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 119, 181, 0.3);
  transform: translateY(-1px);
}

.modern-linkedin-btn i {
  font-size: 1.2rem;
}
"""

with open(path, 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

# Truncate after line 2546 (inclusive of 0-based index 2545) keeping previous modifications but removing the last added block
valid_content = "".join(lines[:2546])

with open(path, 'w', encoding='utf-8') as f:
    f.write(valid_content)
    f.write(new_css)
