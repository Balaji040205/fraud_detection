Fraud Detection





1\. Project Overview



This project is a full-stack application built using Flask for the backend and includes static files, templates, and document handling. The application is designed to process input data, perform relevant computations/processing, and provide results via a structured web interface.



Key components:



Flask backend (app.py, models/, routes/)



Frontend templates (templates/) and static files (static/)



Document storage and input data handling (documents/, input.xlsx)



Results and uploads folders for outputs and user submissions



2\. Folder Structure

full stack/

&nbsp;├── Flask Backend/

&nbsp;│    ├── app.py

&nbsp;│    ├── requirements.txt

&nbsp;│    ├── todo.md

&nbsp;│    ├── models/

&nbsp;│    ├── static/

&nbsp;│    ├── templates/

&nbsp;│    ├── instance/

&nbsp;│    ├── results/

&nbsp;│    └── uploads/

&nbsp;├── documents/

&nbsp;├── documents.zip

&nbsp;└── input.xlsx



3\. Installation \& Setup



Clone the repository:



git clone https://github.com/Balaji040205/fraud\_detection.git

cd <repo-name>







Install dependencies:



pip install -r Flask\\ Backend/requirements.txt





Run the application:



python Flask\\ Backend/app.py





The app will be accessible at http://127.0.0.1:5000/ by default.



4\. Usage



Place input files in input.xlsx



Uploaded files will be stored in Flask Backend/uploads/



Processed results will be saved in Flask Backend/results/



Access web pages via templates/ with static CSS/JS in static/



5\. Key Features



Modular backend using Flask and SQLAlchemy models



Document handling and input file processing



Static resources for styling and interactivity



Organized results storage for output analysis



6\. Notes / Instructions



Ensure all dependencies are installed before running the app



Use the documents.zip for bulk document uploads if needed



Follow the folder structure to avoid file path issues

