
var client = algoliasearch("9ZQ9UTINJC", "2fde64ebe8cf0e11f12a96c5d049daaa");
var posts = client.initIndex('posts');
//initialize autocomplete on search input (ID selector must match)
autocomplete('#aa-search-input',
    { hint: false }, {
        source: autocomplete.sources.hits(posts, {hitsPerPage: 5}),
        //value to be displayed in input control after user's suggestion selection
        displayKey: 'post_content',
        //hash of templates used when rendering dataset
        templates: {
            header: '<div class="aa-suggestions-category"><span>Posts</span><span>Posts</span></div>',
            //'suggestion' templating function used to render a single suggestion
            suggestion: function(suggestion) {
                return '' +
                    '<span>' + suggestion._highlightResult.post_content.value + '</span>' +
                    '<span>' + suggestion._highlightResult.country.value + '</span>';
            }
        }
    });