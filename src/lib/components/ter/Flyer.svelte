<script>
    import { fly,fade } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { page } from '$app/stores';

    let flaier = [1,2,3,4,5];

    

</script>



<div class="sec">


        <ul class="ulis">
            <li class="is-inline">kjk</li>
            <li class="is-inline">kjk</li>
            <li class="is-inline">kjk</li>
            <li class="is-inline">kjk</li>
            <li class="is-inline">kjk</li>
            <li class="is-inline">kjk</li>
            <li class="is-inline">kjk</li>
            <li class="is-inline">kjk</li>
            <li class="is-inline">kjk</li>
            <li class="is-inline">kjk</li>
            <li class="is-inline">kjk</li>
            <li class="is-inline">kjk</li>
            <li class="is-inline">kjk</li>
            <li class="is-inline">kjk</li>
            <li class="is-inline">kjk</li>
            <li class="is-inline">kjk</li>
            <li class="is-inline">kjk</li>
            <li class="is-inline">kjk</li>
            <li class="is-inline">kjk</li>
            <li class="is-inline">kjk</li>
            <li class="is-inline">kjk</li>
        </ul>



    <!-- 
    <div class="columns is-centered is-mobile scroll ">

        {#each flaier as flay,index}
           
        <div class="column is-full is-inline ">
            <div class="card">
                <div class="card-content p-1">
                    <img src="/flyer/{flaier[index]}.jpg" alt="" height="200px">
                </div>
            </div>
        </div>
    {/each}

    </div>
     -->




</div>



<style>

    .ulis{
        width:100%;
        background-color: green;
        overflow-x: scroll;
        overflow: hidden;
        scroll-snap-type: x proximity;
    }


    .box{
        width:100%;
        text-align: center;
  scroll-snap-align: center;
  flex: none;
    }

    .sec{
        background-color: red;
        max-height: 2% !important;
        overflow: hidden;
        position:relative;
    }


    .scroll{
    overflow:auto !important;
    padding-left:50%;
    }









</style>
