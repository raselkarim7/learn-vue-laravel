<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">


    </head>
    <body>
        <div id="app">
            <div class="p-5">
            <h1>Create Posts </h1>
            <form>
                <div class="form-group">
                    <label for="formGroupExampleInput">Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name ">
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Description</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Description">
                </div>
                <button type="submit" class="btn btn-primary">Create</button>
            </form>
            </div>
            <ul>
                <li v-for="skill in skills">@{{ skill }}</li>
            </ul>
             @{{ skills }}



        </div>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="https://unpkg.com/vue"></script>
        <script src="../js/app.js"></script>
    </body>
</html>
