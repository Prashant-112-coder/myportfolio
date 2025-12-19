from PyPDF2 import PdfReader

reader = PdfReader('resume.pdf')
text = ""
for page in reader.pages:
    text += page.extract_text()

# Print cleaned text
lines = [line.strip() for line in text.split('\n') if line.strip()]
for line in lines:
    print(line)
