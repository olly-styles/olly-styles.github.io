---
permalink: /
title: ""
excerpt: "About me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

AI PhD and ex-founder living in London. I've been training machine learning models since 2015. 

I got my Masters in Computer Science (2013-2017) and PhD in Computer Vision (2017-2021) from the University of Warwick. During my PhD, I published 5 papers including a journal paper in IEEE Transactions on Pattern Analysis and Machine Intelligence (PAMI) and a best student paper award at IEEE Computer Vision and Pattern Recognition Workshop (CVPR-W). As a visting researcher, I've worked at the Nanyang Technological University, Michigan State University, and the University of Sydney.

Alongside my PhD, I was a part-time founding engineer of Atlas AI (2019-2021), full-time founding engineer (2022) and finally CTO (2023). Atlas AI used computer vision to automate personal training. We shut down Atlas AI in December 2023 after failing to find product-market fit. We've written a series of blog posts about our four-year startup journey [here](https://artanis.substack.com/p/atlas-ai-part-1-everyones-got-a-gantt).

---

Experience
======
<table style="border: none">  
	{%  include experience.html
		url="https://www.atlasai.co.uk"
        author_list="Atlas AI"
		img_path="atlas_small.jpg"
		title="Cofounder, CTO"
    published_in="January 2023 - December 2023"
	%}
	{%  include experience.html
		url="https://www.atlasai.co.uk"
        author_list="Atlas AI"
		img_path="atlas_small.jpg"
		title="Founding Computer Vision Engineer"
    published_in="January 2019 - December 2022"
	%}
	{%  include experience.html
		url="https://www.gov.uk/government/organisations/defence-and-security-accelerator"
        author_list="Defence and Security Accelerator"
		img_path="dasa.jpg"
		title="Research Assistant"
    published_in="October 2019 - March 2021"
	%}
</table><br>

---

Publications
======
<table style="border: none">  
	{%  include publications.html
        url="https://openaccess.thecvf.com/content/WACV2022W/RWS/papers/Kesa_Multiple_Object_Tracking_and_Forecasting_Jointly_Predicting_Current_and_Future_WACVW_2022_paper.pdf"
		img_path="jla.png"
		title="Multi-Camera Trajectory Forecasting with Trajectory Tensors"
		author_list="Oluwafunmilola Kesa, <u>Olly Styles</u>, Victor Sanchez"
		published_in="WACV-W 2022"
        code_url="https://github.com/FunmiKesa/JLA"
	%}
</table><br>
<table style="border: none">  
	{%  include publications.html
        url="https://arxiv.org/pdf/2108.04694.pdf"
		img_path="trajectory_tensors.jpg"
		title="Multi-Camera Trajectory Forecasting with Trajectory Tensors"
		author_list="<u>Olly Styles</u>, Tanaya Guha, Victor Sanchez"
		published_in="PAMI 2021"
        code_url="https://github.com/olly-styles/Trajectory-Tensors"
        video="https://youtu.be/IjlNEvKQ634"
	%}
</table><br>

<table style="border: none">  
	{%  include publications.html
        url="https://openaccess.thecvf.com/content_CVPRW_2020/papers/w66/Styles_Multi-Camera_Trajectory_Forecasting_Pedestrian_Trajectory_Prediction_in_a_Network_of_CVPRW_2020_paper.pdf"
		img_path="mctf.jpg"
		title="Multi-Camera Trajectory Forecasting: Pedestrian Trajectory Prediction in a Network of Cameras"
		author_list="<u>Olly Styles</u>, Tanaya Guha, Victor Sanchez, Alex Kot"
		published_in="CVPR-W 2020 (Best student paper award)"
        code_url="https://github.com/olly-styles/Multi-Camera-Trajectory-Forecasting"
        video="https://www.youtube.com/watch?v=WtuQHU95WMQ"
	%}
</table><br>

<table style="border: none">  
	{%  include publications.html
        url="https://openaccess.thecvf.com/content_WACV_2020/papers/Styles_Multiple_Object_Forecasting_Predicting_Future_Object_Locations_in_Diverse_Environments_WACV_2020_paper.pdf"
		img_path="wacv_2020.jpg"
		title="Multiple Object Forecasting: Predicting Future Object Locations in Diverse Environments"
		author_list="<u>Olly Styles</u>, Tanaya Guha, Victor Sanchez"
		published_in="WACV 2020"
        code_url="https://github.com/olly-styles/Multiple-Object-Forecasting"
        poster="https://olly-styles.github.io/files.nosync/wacv2020_poster.pdf"
        video="https://www.youtube.com/watch?v=GPdNKE6fq6U&feature=youtu.be"
	%}
</table><br>

<table style="border: none">  
	{%  include publications.html
		url="https://arxiv.org/pdf/1905.03681.pdf"
		img_path="iv2019.png"
		title="Forecasting Pedestrian Trajectory with Machine-annotated Training Data"
		author_list="<u>Olly Styles</u>, Arun Ross, Victor Sanchez"
		published_in="IV 2019"
    code_url="https://github.com/olly-styles/Dynamic-Trajectory-Predictor"
    video="https://www.youtube.com/watch?v=jUTQyUjeynE"
    poster="https://olly-styles.github.io/files.nosync/iv2019_poster.pdf"
	%}
</table><br>

---

Education
======
<table style="border: none">  
	{%  include education.html
		url="https://warwick.ac.uk/fac/sci/dcs/people/victor_sanchez/siplab/"
		img_path="warwick.png"
		title="PhD in Computer Vision"
		author_list="Supervisors: Dr. Victor Sanchez & Dr. Tanaya Guha"
    published_in="Sep 2017 - September 2021"
	%}
	{%  include education.html
		url="https://rose.ntu.edu.sg/Pages/Home.aspx"
		img_path="ntu_logo2.jpg"
		title="Visiting Researcher"
		author_list="Supervisor: Prof. Alex Kot"
    published_in="Aug 2019 - Dec 2019"
	%}
	{%  include education.html
		url="https://iprobe.cse.msu.edu/index.php"
		img_path="msu.png"
		title="Visiting Researcher"
		author_list="Supervisor: Dr. Arun Ross"
    published_in="Sep 2018 - Dec 2018"
	%}
	{%  include education.html
		url="https://sydney.edu.au/"
		img_path="usyd.png"
		title="Visiting Researcher"
		author_list="Supervisor: Dr. Dong Xu"
    published_in="Mar 2018 - Jul 2018"
	%}
	{%  include education.html
		url="https://warwick.ac.uk/fac/sci/dcs/"
		img_path="warwick.png"
		title="Master of Computer Science (1st class)"
		author_list="Supervisor: Dr. Victor Sanchez"
    published_in="Sep 2013 - Jun 2017"
	%}

	{%  include education.html
		url="https://www.ust.hk/home"
		img_path="hkust.png"
		title="Intercalated Year"
		author_list="Supervisor: Prof. Dit-Yan Yeung"
    published_in="Aug 2015 - Jun 2016"
	%}
</table><br>

---

University Teaching
======
<table style="border: none">  
	{%  include modules.html
		url="https://warwick.ac.uk/fac/sci/dcs/teaching/modules/cs342/"
		img_path="cs342.png"
		title="CS342: Machine Learning"
		author_list="Lab tutor"
    published_in="2019-2020"
	%}
	{%  include modules.html
		url="https://warwick.ac.uk/fac/sci/dcs/teaching/modules/cs355/"
		img_path="cs355.png"
		title="CS355: Digital Forensics"
		author_list="Lab tutor"
    published_in="2017-2018, 2018-2019, 2019-2020"
	%}
	{%  include modules.html
		url="https://warwick.ac.uk/fac/sci/dcs/teaching/modules/cs118/"
		img_path="cs118.png"
		title="CS118: Programming for Computer Scientists"
		author_list="Lab tutor"
    published_in="2017-2018, 2018-2019"
	%}

</table>
