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
    <div class="p-5" id="learnform">
    <h3>@{{ intro }}</h3>
    <h4>Create Posts </h4>
    <form @submit="onSubmit">
        <div class="form-group">
            <label for="name">Post Name</label>
            <input
                    v-model="name"
                    type="text" class="form-control name" id="formGroupExampleInput" placeholder="Name "
            >
        </div>
        <div class="form-group">
            <label for="description">Post Description</label>
            <input
                    v-model="description"
                    type="text" class="form-control description" id="description" placeholder="Description"
            >
        </div>
        <button type="submit" class="btn btn-primary">Create</button>
    </form>
    </div>
    <script src="https://unpkg.com/vue"></script>
    <script src="{{url('../../js/app.js')}}"> </script>
</body>
</html>