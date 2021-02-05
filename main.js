$('button').on('click', function(){
    var usuario = $('input').val();

    $('.resultado').css('display', 'none');
    $('.repos').css('display', 'none');
    
    $.ajax({
        dataType: "json",
        url: "https://api.github.com/users/" + usuario,
        success: function(response) {

            var nome = response.name;
            var imagem = response.avatar_url;
            var login = response.login;
            var url = response.html_url;

            var num_repos = response.public_repos;
            var seguidores = response.followers;
            var repos = response.repos_url;

            $.ajax({
                dataType: "json",
                url: repos,
                success: function(response2) {

                    let length = response2.length;
                    
                    for( let l = 0; l < length; l++ ) {
                        var nome_repo = response2[l].name;
                        var url_repo = response2[l].html_url;
                        var lang_repo = response2[l].language;

                        $('.repos').css('display', 'block');

                        $('.repos').append( '<div class="item repo-' + l +'"></div>' );
                        $('.repo-'+ l +'').append('<p>' + nome_repo + '</p>');
                        $('.repo-'+ l +'').append('<a href=' + url_repo + ' target="_blank">Link</a>');
                        $('.repo-'+ l +'').append('<p>' + lang_repo + '</p>');
                        $('.repo-'+ l +'').append('<hr>');
                    }

                }
            });

            $('.resultado').css('display', 'flex');

            $('.imagem').attr('src', imagem);
            $(".nome").html(nome);
            $(".num-repos").html(num_repos);
            $(".seguidores").html(seguidores);
            $(".login").html(login);
            $(".url").attr('src', url);
        },
    }).fail(function(error) { 
        $(".erro").html('Usuário não encontrado');
    });
});