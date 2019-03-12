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
    <form @submit.prevent="onSubmit"  @keypress="errors.clear($event.target.name)">
        <div class="form-group">
            <label for="name">Post Name</label>
            <input
                    v-model="name"
                    @keyup="errors.name = '' "
                    type="text" name="name" class="form-control " id="formGroupExampleInput" placeholder="Name "
            >
            <span class="text-danger" v-if="errors.get('name')">@{{ errors.get('name') }}</span>

        </div>
        <div class="form-group">
            <label for="description">Post Description</label>
            <input
                    v-model="description"
                    type="text" name="description" class="form-control " id="description" placeholder="Description"
            >
            <span class="text-danger" v-if="errors.get('description')">@{{ errors.get('description') }}</span>
        </div>
        <button :disabled="errors.any()" type="submit" class="btn btn-primary">Create</button>
    </form>
    </div>
    <script src="https://unpkg.com/vue"></script>
    <script src="{{url('../../js/learnform.js')}}"> </script>
</body>
</html>