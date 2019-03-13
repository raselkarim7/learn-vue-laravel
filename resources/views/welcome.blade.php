<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel</title>

        <!--Bulma--->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css">
        <!-- Bootstrap -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">


    </head>
    <body>
        <b class="tag is-danger p-2 m-2">I am using Bulma</b>


        <div class="m-2">
            <div id="one" class="border p-2 mb-2 has-background-primary	"> 
                <h1>
                    @{{ store.user.name }}
                </h1>
            </div>
            
            <div id="two" class="border p-2 has-background-grey-light">
                <h1>
                    @{{ store.user.name }}
                </h1> 
            </div>
        </div>

        <script src="https://unpkg.com/vue"></script>
        <script src="../js/app.js"></script>
    </body>
</html>
