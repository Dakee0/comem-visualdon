import { json } from 'd3-fetch'

const usersUrl = 'http://localhost:3000/profile/';
const postsUrl = 'http://localhost:3000/posts/';

Promise.all([
    json('usersUrl'),
    json('postsUrl')
])
    .then(([users, posts]) => {
        const data = users.map(user => {
            const userPosts = posts
                .filter(post => post.userId == user.id)
                .map(post => post.title);

            return {
                nom_utilisateur: user.username,
                ville: user.address.city,
                nom_companie: user,
                titres_posts: userPosts,
            };
        });

        const postsPerUser = data.map(user => ({
            nom_utilisateur: user.nom_utilisateur,
            nombre_de_posts: user.titres_posts.length,
        }));
        console.log('Nombre de posts par utilisateur :', postsPerUser);

        // Trouver le user qui a écrit le texte le plus long dans posts.body
        const userWithLongestPost = data.reduce((maxUser, currentUser) => {
            const maxPostLength = maxUser
                ? maxUser.titres_posts.reduce((max, post) => Math.max(max, post.length), 0)
                : 0;

            const currentPostLength = currentUser.titres_posts.reduce((max, post) => Math.max(max, post.length), 0);

            return currentPostLength > maxPostLength ? currentUser : maxUser;
        }, null);

        console.log('Utilisateur avec le texte le plus long :', userWithLongestPost);
    })
    .catch(error => console.error('loading data error :', error));