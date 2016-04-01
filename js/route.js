app.config(['$routeProvider',function ($routeProvider){
/*console.log($routeProvider);*/
$routeProvider
     .when('/',
        {
          controller:'HomeController',
          templateUrl:'includes/home.html'
        })
     .when('/about_us',
        {
          controller:'AboutController',
          templateUrl:'includes/about_us.html'

        })
     .when('/about_school',
        {
          controller:'AboutSchoolController',
          templateUrl:'includes/about_school.html'

        })
    .when('/school_history',
        {
            controller:'SchoolHistoryController',
            templateUrl:'includes/school_history.html'

        })
    .when('/aims_objectives',
        {
            controller:'AimsObjectivesController',
            templateUrl:'includes/aims_objectives.html'

        })
    .when('/pledge',
        {
            controller:'PledgeController',
            templateUrl:'includes/pledge.html'

        })
    .when('/SpecialFeatures',
        {
            controller:'SpecialFeaturesController',
            templateUrl:'includes/SpecialFeatures.html'

        })
    .when('/PrayerHymns',
        {
            controller:'PrayerHymnsController',
            templateUrl:'includes/PrayerHymns.html'

        })
    .when('/SchoolEmblem',
        {
            controller:'SchoolEmblemController',
            templateUrl:'includes/SchoolEmblem.html'

        })
    .when('/NormsOfDiscipline',
        {
            controller:'NormsOfDisciplineController',
            templateUrl:'includes/NormsDiscipline.html'

        })
    .when('/ParentTeacherRelationship',
        {
            controller:'ParentTeacherRelationshipController',
            templateUrl:'includes/ParentTeacherRelationship.html'

        })
    .when('/TheWayOfTheCross',
        {
            controller:'TheWayOfTheCrossController',
            templateUrl:'includes/TheWayOfTheCross.html'

        })
    .when('/PrincipalMessage',
        {
            controller:'PrincipalMessageController',
            templateUrl:'includes/PrincipalMessage.html'

        })
    .when('/PrincipalLetter',
        {
            controller:'PrincipalLetterController',
            templateUrl:'includes/PrincipalLetter.html'

        })
    .when('/Principal',
        {
            controller:'PrincipalController',
            templateUrl:'includes/Principal.html'

        })
    .when('/ManagingCommittee',
        {
            controller:'ManagingCommitteeController',
            templateUrl:'includes/ManagingCommittee.html'

        })
    .when('/HeadBoyGirl',
        {
            controller:'HeadBoyGirlController',
            templateUrl:'includes/HeadBoyGirl.html'

        })
    .when('/SchoolCabinet',
        {
            controller:'SchoolCabinetController',
            templateUrl:'includes/SchoolCabinet.html'

        })
    .when('/WordsAndWisdom',
        {
            controller:'WordsAndWisdomController',
            templateUrl:'includes/WordsAndWisdom.html'

        })
    .when('/PhotoGallery',
        {
            controller:'PhotoGalleryController',
            templateUrl:'includes/PhotoGallery.html'

        })
    .when('/Rules',
        {
            controller:'RulesController',
            templateUrl:'includes/Rules.html'

        })
    .when('/IdealStudents',
        {
            controller:'IdealStudentsController',
            templateUrl:'includes/IdealStudents.html'

        })
    .when('/AdmissionProcedure',
        {
            controller:'AdmissionProcedureController',
            templateUrl:'includes/AdmissionProcedure.html'

        })
    .when('/FeesStructure',
        {
            controller:'FeesStructureController',
            templateUrl:'includes/feesStructure.html'

        })
     .when('/GrandParentsDay',
        {
            controller:'PhotoGalleryController',
            templateUrl:'includes/GrandParentsDay.html'

        })
     .when('/InterSchoolFootballTournament',
        {
            controller:'PhotoGalleryController',
            templateUrl:'includes/InterSchoolFootballTournament.html'

        })
     .when('/RepublicDay',
        {
            controller:'PhotoGalleryController',
            templateUrl:'includes/RepublicDay.html'

        })
     .when('/MartyrDay',
        {
            controller:'PhotoGalleryController',
            templateUrl:'includes/martyrDay.html'

        })
.when('/Christmas',
        {
            controller:'PhotoGalleryController',
            templateUrl:'includes/christmas.html'

        })
.when('/CarolSinging',
        {
            controller:'PhotoGalleryController',
            templateUrl:'includes/CarolSinging.html'

        })
.when('/ChristmasCarol',
        {
            controller:'PhotoGalleryController',
            templateUrl:'includes/ChristmasCarol.html'

        })
.when('/BulletinBoard',
        {
            controller:'PhotoGalleryController',
            templateUrl:'includes/BulletinBoard.html'

        })
.when('/ActionSong',
        {
            controller:'PhotoGalleryController',
            templateUrl:'includes/ActionSong.html'

        })
.when('/TeachersOrientation',
        {
            controller:'PhotoGalleryController',
            templateUrl:'includes/TeachersOrientation.html'

        })
.when('/SocialStudiesQuiz',
        {
            controller:'PhotoGalleryController',
            templateUrl:'includes/SocialStudiesQuiz.html'

        })
.when('/SaladFlower',
        {
            controller:'PhotoGalleryController',
            templateUrl:'includes/SaladFlower.html'

        })

.when('/VideoGallery',
        {
            controller:'VideoGalleryController',
            templateUrl:'includes/VideoGallery.html'

        })
.when('/Janmashtami',
        {
            controller:'VideoGalleryController',
            templateUrl:'includes/Janmashtami.html'

        })
.when('/FatherBirthday',
        {
            controller:'VideoGalleryController',
            templateUrl:'includes/FatherBirthday.html'

        })
.when('/AnnualDay',
        {
            controller:'VideoGalleryController',
            templateUrl:'includes/AnnualDay.html'

        })
.when('/SeminarParentsTeachers',
        {
            controller:'VideoGalleryController',
            templateUrl:'includes/SeminarParentsTeachers.html'

        })
.when('/ClassPhotos',
        {
            controller:'ClassPhotosController',
            templateUrl:'includes/ClassPhotos.html'

        })


     .otherwise({redirectTo:'/'});
}]); 


app.directive('ngSpinnerLoader', ['$rootScope',
    function($rootScope) {
        return {
            link: function(scope, element, attrs) {
                // by defult hide the spinner bar
                element.addClass('hide'); // hide spinner bar by default
                // display the spinner bar whenever the route changes(the content part started loading)
                $rootScope.$on('$routeChangeStart', function() {
                    element.removeClass('hide'); // show spinner bar
                });
                // hide the spinner bar on rounte change success(after the content loaded)
                $rootScope.$on('$routeChangeSuccess', function() {
                    setTimeout(function(){
                        element.addClass('hide'); // hide spinner bar
                    },5000);
                    $("html, body").animate({
                        scrollTop: 0
                    },5000);
                });
            }
        };
    }
])

