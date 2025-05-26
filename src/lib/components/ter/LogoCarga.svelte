<script>
</script>


    <!-- imagen de carga  -->

        <figure class="image is-128x128">
            <img class="is-rounded imagenload" src="/publicdev.png" alt="loading" />
            <div class="disco"></div>
        </figure>


<style>
    .imagenload{
        animation: giro 1s infinite linear;
    }

    .disco{
        background-color:rgba(1,1,1,.4);
        width:130%;
        height:130%;
        z-index:-10;
        border-radius: 30%;
        border-style:solid;
        border-top-color: red transparent transparent transparent;
        position: absolute !important;
        transform:translate(-50%,-50%);
        top:50%;
        left:50%;
    }

    @keyframes giro{
        to{
            transform:rotate(360deg);
        }
    }


    .fondo{
        background: rgba(1,1,1,0);
        overflow:hidden;
    }
</style>
