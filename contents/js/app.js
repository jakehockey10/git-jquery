$( "#repos" ).on( "click", function( event ) {
    repoList()
});

$( "#myrepos" ).on( "click", function( event ) {
    myRepos()
});

$( "#myevents" ).on( "click", function( event ) {
    myEvents()
});

// default to repos.
$('#repos').click();
