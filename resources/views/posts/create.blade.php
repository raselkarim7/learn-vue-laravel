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
    <form @submit.prevent="onSubmit"  @keypress="form.errors.clear($event.target.name)">
        <div class="form-group">
            <label for="name">Post Name</label>
            <input
                    v-model="form.name"
                    @keyup="form.errors.name = '' "
                    type="text" name="name" class="form-control " id="formGroupExampleInput" placeholder="Name "
            >
            <span class="text-danger" v-if="form.errors.get('name')">@{{ form.errors.get('name') }}</span>

        </div>
        <div class="form-group">
            <label for="description">Post Description</label>
            <input
                    v-model="form.description"
                    type="text" name="description" class="form-control " id="description" placeholder="Description"
            >
            <span class="text-danger" v-if="form.errors.get('description')">@{{ form.errors.get('description') }}</span>
        </div>
        <button :disabled="form.errors.any()" type="submit" v-if="!sumittingAnimation" class="btn btn-primary">
            Create
        </button>
        <div class="spinner-border text-primary" v-if="sumittingAnimation" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </form>
        <div>
            <h1>All Posts</h1>
            <ul>
                <li v-for="post in allposts">
                    <b>Name: </b> @{{post.name}}
                    <br>
                    <b>Description: </b> @{{post.description}}
                </li>
            </ul>
        </div>
    </div>
    <script src="https://unpkg.com/vue"></script>
    <script src="{{url('../../js/learnform.js')}}"> </script>
</body>
</html>