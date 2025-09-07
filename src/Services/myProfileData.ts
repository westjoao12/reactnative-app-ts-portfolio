const myProfileData = {
    nome: 'WEST JOÃO',
    socialMedia: [
        {
            type: 'linkedin',
            nome: 'LINKEDIN',
            lnk: 'https://www.linkedin.com/in/westjoao12'
        },
        {
            type: 'github',
            nome: 'GITHUB',
            lnk: 'https://github.com/westjoao12'
        },
        {
            type: 'facebook',
            nome: 'FACEBOOK',
            lnk: 'https://www.facebook.com/westjoao.afonso'
        }
    ]
}

export const getProfileData = () => {
    return  myProfileData;
}