import Ceci from '../../../../assets/Team/Ceci.png';
import Aqua from '../../../../assets/Team/Aqua.png';
import Luce from '../../../../assets/Team/Luce.png';
import Valu from '../../../../assets/Team/Valu.png';
import Ry from '../../../../assets/Team/Ry.png';
import Max from '../../../../assets/Team/Max.png';
import Lio from '../../../../assets/Team/Lio.png';
import Jan from '../../../../assets/Team/Jan.png';
import Bas from '../../../../assets/Team/Bas.png';
import Mora from '../../../../assets/Team/Mora.png';

export interface TeamMember {
    name: string;
    title: string;
    imgSrc: string;
}

export const teamMembersColumnOne: TeamMember[] = [
    { name: 'Cecilia Maas', title: 'Product Manager', imgSrc: Ceci },
    { name: 'Aquarela Padilla', title: 'Researcher', imgSrc: Aqua },
    { name: 'Lucena Palma', title: 'Communications Manager', imgSrc: Luce },
];

export const teamMembersColumnTwo: TeamMember[] = [
    { name: 'Ryan della Salla', title: 'Researcher', imgSrc: Ry },
    { name: 'Lionel Chamorro', title: 'AI Architect', imgSrc: Lio },
    { name: 'Max Telias', title: 'Administrative Manager', imgSrc: Max },
    { name: 'Jan Kühn', title: 'Developer', imgSrc: Jan },
];

export const teamMembersColumnThree: TeamMember[] = [
    { name: 'Valeria Behrend', title: 'Frontend Developer & UX/UI Designer', imgSrc: Valu },
    { name: 'Bastian Silva', title: 'AI Engineer', imgSrc: Bas },
    { name: 'Mora Dreszman', title: 'Graphic designer', imgSrc: Mora },
];

export const allTeamMembers = [
    teamMembersColumnOne,
    teamMembersColumnTwo,
    teamMembersColumnThree
];

export const mainContactPerson = {
    name: 'Dr. Cecilia Maas',
    email: 'cecilia.maas@aureka.ai',
    linkedIn: 'https://www.linkedin.com/in/cecilia-maas-49850091/'
};
