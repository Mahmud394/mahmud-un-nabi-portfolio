from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable, ListFlowable, ListItem
)
from reportlab.lib.enums import TA_LEFT

INK = colors.HexColor("#17202A")
MUTED = colors.HexColor("#4A5560")
ACCENT = colors.HexColor("#008DB5")
LINE = colors.HexColor("#D8DEE4")

doc = SimpleDocTemplate(
    "/home/claude/cv/Mahmud_Un_Nabi_CV.pdf",
    pagesize=letter,
    topMargin=0.55 * inch,
    bottomMargin=0.55 * inch,
    leftMargin=0.65 * inch,
    rightMargin=0.65 * inch,
    title="Mahmud Un Nabi - CV",
    author="Mahmud Un Nabi",
)

name_style = ParagraphStyle(
    "Name", fontName="Helvetica-Bold", fontSize=22, textColor=INK,
    spaceAfter=2, leading=26,
)
role_style = ParagraphStyle(
    "Role", fontName="Helvetica", fontSize=11, textColor=ACCENT,
    spaceAfter=6,
)
contact_style = ParagraphStyle(
    "Contact", fontName="Helvetica", fontSize=9.5, textColor=MUTED,
    spaceAfter=10, leading=14,
)
section_style = ParagraphStyle(
    "Section", fontName="Helvetica-Bold", fontSize=12, textColor=INK,
    spaceBefore=14, spaceAfter=6, leading=14,
)
body_style = ParagraphStyle(
    "Body", fontName="Helvetica", fontSize=10, textColor=INK,
    leading=14.5, alignment=TA_LEFT, spaceAfter=4,
)
subhead_style = ParagraphStyle(
    "Subhead", fontName="Helvetica-Bold", fontSize=10.5, textColor=INK,
    leading=14, spaceAfter=1,
)
meta_style = ParagraphStyle(
    "Meta", fontName="Helvetica-Oblique", fontSize=9.5, textColor=MUTED,
    leading=13, spaceAfter=3,
)
bullet_style = ParagraphStyle(
    "Bullet", fontName="Helvetica", fontSize=9.7, textColor=INK, leading=13.5,
)
tagline_style = ParagraphStyle(
    "Tagline", fontName="Helvetica", fontSize=10, textColor=MUTED, leading=14, spaceAfter=6,
)

def hr():
    return HRFlowable(width="100%", thickness=0.8, color=LINE, spaceBefore=2, spaceAfter=8)

def bullets(items):
    return ListFlowable(
        [ListItem(Paragraph(i, bullet_style), spaceAfter=2, bulletColor=INK) for i in items],
        bulletType="bullet", start="•", leftIndent=14,
    )

story = []

story.append(Paragraph("Mahmud Un Nabi", name_style))
story.append(Paragraph(
    "Software Engineering Student &bull; Full Stack Developer &bull; Competitive Programmer &bull; Aspiring Data Scientist",
    role_style
))
story.append(Paragraph(
    "Bangladesh &nbsp;|&nbsp; unmahmud@gmail.com &nbsp;|&nbsp; "
    "github.com/Mahmud394 &nbsp;|&nbsp; linkedin.com/in/mahmud-un-nabi-056808285 &nbsp;|&nbsp; "
    "codeforces.com/profile/Mahmud_Un_Nabi &nbsp;|&nbsp; leetcode.com/u/Mahmud_Un_Nabi",
    contact_style
))
story.append(hr())

# Summary
story.append(Paragraph("SUMMARY", section_style))
story.append(Paragraph(
    "Software Engineering undergraduate majoring in Data Science at Daffodil International "
    "University. Experienced in building full stack web applications, solving algorithmic "
    "problems through competitive programming, and applying machine learning with a focus on "
    "explainability. Currently conducting undergraduate thesis research on DevOps adoption "
    "using explainable machine learning methods.",
    body_style
))

# Education
story.append(Paragraph("EDUCATION", section_style))
story.append(Paragraph("Daffodil International University", subhead_style))
story.append(Paragraph(
    "Undergraduate Program in Software Engineering &mdash; Major in Data Science &bull; Bangladesh",
    meta_style
))

# Thesis / Research
story.append(Paragraph("RESEARCH / UNDERGRADUATE THESIS (ONGOING)", section_style))
story.append(Paragraph(
    "Factors Influencing DevOps Adoption Intention among Undergraduate Software Engineering "
    "Students in Bangladesh: An Explainable Machine Learning Approach",
    subhead_style
))
story.append(bullets([
    "Studying DevOps adoption intention among Software Engineering students through primary survey data collection.",
    "Applying Machine Learning-based prediction combined with Explainable AI (XAI) techniques.",
    "Exploring technology acceptance factors within a Software Engineering education context.",
]))

# Technical Skills
story.append(Paragraph("TECHNICAL SKILLS", section_style))
skills_table = [
    ("Programming Languages", "C, C++, Java, Python, JavaScript, PHP, SQL"),
    ("Frontend Development", "HTML5, CSS3, React.js, Tailwind CSS"),
    ("Backend Development", "Node.js, Express.js, Django, PHP"),
    ("Database", "MySQL"),
    ("Tools & Technologies", "Git, GitHub, VS Code, XAMPP, REST APIs, Docker (exploring)"),
    ("AI & Data Science", "Artificial Intelligence, Machine Learning, Deep Learning, Data Analysis, Neural Networks, Explainable AI"),
]
for label, value in skills_table:
    story.append(Paragraph(f"<b>{label}:</b> {value}", body_style))

# Projects
story.append(Paragraph("PROJECTS", section_style))

story.append(Paragraph("EstateHub &mdash; Smart Real Estate Marketplace", subhead_style))
story.append(Paragraph("React.js, Node.js, Express.js, MySQL &bull; Major Academic Project", meta_style))
story.append(bullets([
    "AI-powered real estate marketplace connecting property buyers/renters with brokers, with Client, Broker, and Admin roles.",
    "Implemented property listing management, search and filtering, favorites, reviews, messaging, and notifications.",
    "Built EstateAI, a natural-language assistant that recommends matching properties based on user requirements.",
]))

story.append(Paragraph("Event Management System", subhead_style))
story.append(Paragraph("Python, Django, Tailwind CSS &bull; Academic Project", meta_style))
story.append(Paragraph("Web-based application for managing events through a structured interface.", body_style))

story.append(Paragraph("Meducare", subhead_style))
story.append(Paragraph("PHP, MySQL &bull; Academic Project", meta_style))
story.append(Paragraph("Healthcare and medicine education project focused on organizing information with a structured database design.", body_style))

story.append(Paragraph("VolunteerHub", subhead_style))
story.append(Paragraph("Academic Project", meta_style))
story.append(bullets([
    "Volunteer management platform connecting volunteers and NGOs.",
    "Includes volunteer management, NGO management, admin management, and a structured project workflow.",
]))

story.append(Paragraph("Tic-Tac-Toe AI", subhead_style))
story.append(Paragraph("Artificial Intelligence, Algorithms", meta_style))
story.append(Paragraph("Game-playing AI implementing the Minimax algorithm for intelligent decision-making.", body_style))

# Competitive programming
story.append(Paragraph("COMPETITIVE PROGRAMMING", section_style))
story.append(Paragraph(
    "Active on Codeforces (codeforces.com/profile/Mahmud_Un_Nabi) and LeetCode "
    "(leetcode.com/u/Mahmud_Un_Nabi), with ongoing practice in algorithms and data structures. "
    "Code and practice repositories are maintained on GitHub (github.com/Mahmud394).",
    body_style
))

doc.build(story)
print("done")
