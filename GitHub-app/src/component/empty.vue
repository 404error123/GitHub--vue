<template>
    <div class="empty">
        <svg height="32" class="octicon octicon-star blankslate-icon" viewBox="0 0 14 16" version="1.1" width="28" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
        <h4>You don't have any {{message}} yet.</h4>
        <p>As you <a href="/">explore GitHub</a>, star repositories to save them for later and they’ll show up here.</p>
    </div>
</template>

<script>
export default {
    props: ['message']
}
</script>

<style>
    .empty {
        margin-top: 32px;
        padding: 32px;
        text-align: center;
        background-color: #fafbfc;
        border: 1px solid #e1e4e8;
        border-radius: 3px;
        box-shadow: inset 0 0 10px rgba(27,31,35,0.05);
    }
    .empty svg {
        fill: #a3aab1;
    }
    .empty h4 {
        margin-top: 8px;
        line-height: 24px;
        font-size: 15px;
    }
    .empty p {
        font-size: 13px;
        margin-bottom: 10px;
    }
    .empty p a {
        color: #0366d6;
    }
    .empty p a:hover {
        text-decoration: underline;
    }
</style>

