export enum SOLID {
	SRP = 'Single Responsibility Principle',
	OCP = 'Open-Closed Principle',
	LSP = 'Liskov Substitution Principle',
	ISP = 'Interface Segregation Principle',
	DIP = 'Dependency Inversion Principle',
}

// const solid = {
//   SRP: "Single Responsibility Principle",
//   OCP: "Open-Closed Principle",
//   LSP: "Liskov Substitution Principle",
//   ISP: "Interface Segregation Principle",
//   DIP: "Dependency Inversion Principle"
// }

type PrincipleObjType = {
	title: SOLID;
	link: string;
	key: string;
};

export const principles: PrincipleObjType[] = [
	{
		title: SOLID.SRP,
		link: '/solid-principles/srp',
		key: 'srp',
	},
	{
		title: SOLID.OCP,
		link: '/solid-principles/ocp',
		key: 'ocp',
	},
	{
		title: SOLID.LSP,
		link: '/solid-principles/lsp',
		key: 'lsp',
	},
	{
		title: SOLID.ISP,
		link: '/solid-principles/isp',
		key: 'isp',
	},
	{
		title: SOLID.DIP,
		link: '/solid-principles/dip',
		key: 'dip',
	},
];
