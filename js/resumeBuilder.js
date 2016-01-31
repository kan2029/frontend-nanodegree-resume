var bio = {
	name: 'Karanbir Kajal',
	role: 'Front-end web developer',
	contacts: {
		mobile: '+91-9972241602',
		email: 'karanbir.kajal@gmail.com',
		github: 'https://github.com/kan2029',
		location: 'Bangalore, India'
	},
	biopic: 'images/biopic.jpg',
	welcomeMessage: 'On the road to becoming a front-end Ninja...',
	skills: ['HTML', 'CSS', 'Javascript', 'JQuery', 'Bootstrap', 'PHP', 'MySQL'],
	display: function(){
		$('#header').append(HTMLheaderName.replace('%data%', bio['name']));
		$('#header').append(HTMLheaderRole.replace('%data%', bio['role']));
		$('#header').append(HTMLContactStart);
		$('#contacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
		$('#contacts').append(HTMLemail.replace('%data%', bio.contacts.email));
		$('#contacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
		$('#contacts').append(HTMLlocation.replace('%data%', bio.contacts.location));
		$('#footerContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
		$('#footerContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
		$('#footerContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
		$('#footerContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));	
		$('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
		$('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
		if(bio.skills.length){
			$('#header').append(HTMLskillsStart);
			for(skill in bio.skills){
				$('#skills').append(HTMLskills.replace('%data%', bio.skills[skill]));
			}
		}
	}
};

var education = {
	schools: [
		{
			name: 'Indian Institute of Technology, Roorkee',
			location: 'Roorkee, Uttarakhand, India',
			degree: 'M.Tech',
			majors: ['Wireless Communication'],
			dates: '2014',
			url:'www.iitr.ac.in'
		},
		{
			name: 'Indian Institute of Technology, Roorkee',
			location: 'Roorkee, Uttarakhand, India',
			degree: 'B.Tech',
			majors: ['Electronics and Communication'],
			dates: '2013',
			url:'www.iitr.ac.in'
		}
	],

	onlineCourses: [
		{
			title: 'Intro to HTML and CSS',
			school: 'Udacity',
			date: '2015',
			url: 'www.udacity.com'
		},
		{
			title: 'Object oriented Javascript',
			school: 'Udacity',
			date: '2015',
			url: 'www.udacity.com'
		},
	],

	display: function(){
		if(education.schools.length){
			for(school in education.schools){
				$('#education').append(HTMLschoolStart);
				$('.education-entry:last').append(HTMLschoolName.replace('%data%', education.schools[school].name));
				$('.education-entry:last').append(HTMLschoolDates.replace('%data%', education.schools[school].dates));
				$('.education-entry:last').append(HTMLschoolDegree.replace('%data%', education.schools[school].degree));
				$('.education-entry:last').append(HTMLschoolLocation.replace('%data%', education.schools[school].location));
			}
		}
		if(education.onlineCourses.length){
			$('#education').append(HTMLonlineClasses);
			for(course in education.onlineCourses){
				$('#education').append(HTMLonlineClassStart);
				$('.online-entry:last').append(HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title));
				$('.online-entry:last').append(HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school));
				$('.online-entry:last').append(HTMLonlineDates.replace('%data%', education.onlineCourses[course].date));
				$('.online-entry:last').append(HTMLonlineURL.replace('%data%', education.onlineCourses[course].url));
			}
		}
	}
};

var projects = {
	projects: [
		{
			title: 'ZCZ sequence design and its application in CDMA systems',
			dates: '2013-2014',
			description: 'Construction methods to achieve zero correlation zones',
			images: ['images/project-1.jpg', 'images/project-2.gif'],
		}
	],
	display: function(){
		for(project in projects.projects){
			$('#projects').append(HTMLprojectStart);
			$('.project-entry:last').append(HTMLprojectTitle.replace('%data%', projects.projects[project].title));
			$('.project-entry:last').append(HTMLprojectDates.replace('%data%', projects.projects[project].dates));
			$('.project-entry:last').append(HTMLprojectDescription.replace('%data%', projects.projects[project].description));
			for(var i=0; i < projects.projects[project].images.length; i ++){
				$('.project-entry:last').append(HTMLprojectImage.replace('%data%', projects.projects[project].images[i]));	
			}
		}
	}
};

var work = {
	jobs:[
		{
			employer: 'Commonfloor.com',
			title: 'Software Development Engineer-1',
			location: 'Bangalore, India',
			dates: 'in progress',
			description: 'I work as a front-end web developer'
		},
		{
			employer: 'Tata Motors',
			title: 'Manager',
			location: 'Pune, India',
			dates: '2014-2015',
			description: "Designed product release requirements for 'in-vehicle' android apps"
		}
	],

	display: function(){
		if(work.jobs.length){
			for (job in work.jobs){
				$('#workExperience').append(HTMLworkStart);
				$('.work-entry:last').append(HTMLworkEmployer.replace('%data%', work.jobs[job].employer));
				$('.work-entry:last').append(HTMLworkTitle.replace('%data%', work.jobs[job].title));
				$('.work-entry:last').append(HTMLworkLocation.replace('%data%', work.jobs[job].location));
				$('.work-entry:last').append(HTMLworkDates.replace('%data%', work.jobs[job].dates));
				$('.work-entry:last').append(HTMLworkDescription.replace('%data%', work.jobs[job].description));
			}
		}	
	}
};

/**
* @description Returns location of work object
* @param {object} work_object
* @returns {array} locations
*/
var locationizer = function(work_object){
	var locations = [];
	for(job in work_object.jobs){
		locations.push(work_object.jobs[job].location);
	}
	return locations;
}

/**
* @description Returns name in international format
* @param {string} name
* @returns {string} name in international format
*/
var inName = function(name){
	var name_array = name.split(' ');
	name_array[0] = name_array[0].slice(0,1).toUpperCase() + name_array[0].slice(1).toLowerCase();
	name_array[1] = name_array[1].toUpperCase();
	$('#name').html(name_array.join(' '));
	return name_array.join(' ');
}

$(document).ready(function(){
	bio.display();
	work.display();
	projects.display();
	education.display();
	$('#main').append(internationalizeButton);
	$('#mapDiv').append(googleMap);
	$('button').click(function() {
	    var iName = inName($('#name').html()) || function(){};
	    $('#name').html(iName);  
	});
});