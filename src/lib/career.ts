namespace MINTSCAN {
	export const projects: Project[] = [
		{
			name: '민트스캔 서비스 개발',
			intro: [
				'민트스캔은 실시간, 시계열 블록체인 데이터 기반의 투자 지표와 시각화 정보를 제공하는 서비스로',
				'MAU 40만명 이상의 유저를 보유하고 있습니다. 사용자 경험 개선을 위한 페이지 개편과 더불어 시계열 데이터를 활용한 ',
				'시각화 지표 제공을 통해 웹 서비스를 고도화하는 작업을 진행하였으며, 연간 트래픽이 60% 이상 증가하였습니다.'
			],
			skills: [
				'Svelte',
				'TypeScript',
				'Sass',
				'Firestore Database',
				'Firebase Functions',
				'Nest.js',
				'Node.js',
				'Redis'
			],
			duration: { start: new Date('2023-03'), end: 'in-progress' },
			experience: [
				'사용자 경험 개선을 위한 페이지 UI 개편, 신규 페이지 개발 및 반응형 대응',
				'Atomic 디자인 패턴을 활용한 공통 컴포넌트 개발',
				'데이터 시각화를 위한 데이터 전처리 및 Chart.js, svg를 이용한 차트 개발',
				'Canvas를 이용한 실시간 블록 데이터 시각화 및 가상 스크롤을 이용한 렌더링 성능 최적화',
				'이미지 렌더링 최적화를 위한 사전 이미지 리사이징 시스템 개발',
				'Express 기반의 BFF API계층을 구현하여 프론트앤드 코드의 복잡성을 낮추고 여러 API 호출에 대한 부하를 감소',
				'Redis를 사용하여 GCP 서버의 캐시를 구현하여 데이터 처리 효율성 개선 및 응답 속도 개선',
				'Nest.js의 Cron을 사용하여 시계열 데이터 개발',
				'대화형 CLI와 Node.js 파일 시스템 모듈을 통한 폴더/파일 관리 자동화 시스템 개발'
			]
		},
		{
			name: '백오피스 광고 관리 시스템 개발',
			intro: [
				'개발 업무 효율의 증대와 비개발자인 타 부서 팀원들도 쉽게 광고 데이터를 관리함을 목적으로 사내 광고 관리 시스템을 개발하였습니다.',
				'광고를 추가하고 사용자에게 노출되기까지의 아키텍쳐를 설계하였으며 보다 직관적이게 광고 관리 툴 UI를 개발하였습니다.',
				'Google Analytics를 통해 트래픽이 많은 페이지를 분석하였으며,',
				' 광고와 관련 있는 페이지에 노출하도록 쿼리를 개발하여 노출 대비 클릭 수를 30% 이상 증가하였습니다.'
			],
			skills: [
				'Svelte',
				'TypeScript',
				'Sass',
				'Firestore Database',
				'Firebase Storage',
				'Firebase Functions'
			],
			duration: { start: new Date('2024-07'), end: new Date('2024-09') },
			experience: [
				'Firestore DB를 이용한 광고 데이터 CRUD 기능 개발',
				'Firebase Storage의 용량 감소를 위해 이미지 파일을 WebP 형식으로 전환하여 저장 공간 50% 절감',
				'광고용 프록시 서버(BFF) 비즈니스 로직 및 쿼리 개발',
				'사내 광고 관리 시스템 UI 개발'
			]
		},
		{
			name: 'Web3 지갑 개발',
			intro: [
				'민트스캔 웹 지갑은 프로젝트 초기 단계부터 기획, UX 및 디자인을 함께 고민하며 만든 서비스입니다.',
				'사용자 경험을 중시하며, 사용자가 편리하게 자주 이용할 수 있는 것에 중점을 두며 개발을 진행하였습니다.',
				'서비스 런칭 이후 트래픽이 40% 이상 증가했고, 일간 사용자 수 8000명 이상을 보유하고 있습니다.'
			],
			skills: ['Svelte', 'Svelte-store', 'Sass', 'TypeScript'],
			duration: { start: new Date('2024-07'), end: new Date('2024-09') },
			experience: [
				'복잡한 상태관리를 위해 싱글톤 패턴의 클래스와 전역 상태 관리(svelte-store)를 이용한 이자 받기 기능 구현',
				'탬플릿 메서드 패턴을 활용하여 코어 기능을 공통화하고, 변경이 필요한 메서드를 추상 메서드로 정의하여 관리',
				'Javascript 숫자형 표현 범위 문제를 마주하고, 문자형으로 숫자를 관리하고 Big.js를 사용하여 연산하는 파이프라인 구현',
				'무한 스크롤을 사용한 거래 내역 조회 기능 개발',
				'송금, 예치, 예치 취소, 재예치 기능 구현',
				'Local storage를 이용한 주소록 개발',
				'유지/보수, 버그 리포트 대응'
			]
		}
	];
}

namespace INTERN {
	export const projects: Project[] = [
		{
			name: '민트스캔 버전 업그레이드',
			intro: [],
			skills: ['Svelte', 'TypeScript', 'Sass'],
			duration: { start: new Date('2022-09'), end: new Date('2023-02') },
			experience: [
				'React 기반의 웹 사이트를 Svelte로 마이그레이션',
				'웹 / 테블릿 / 모바일 등 다양한 디바이스에 대응되는 반응형 컴포넌트 및 웹 서비스 구현',
				'재사용성과 확장성을 고려한 공통 컴포넌트와 페이지 컴포넌트 신규 개발',
				'JSON 기반의 거래 데이터 Parser 개발, UI 개발'
			]
		}
	];
}

export type Career = {
	company: string;
	department: string;
	duration: Duration;
	intro: string[];
	project: Project[];
};

export type Project = {
	name: string;
	intro: string[];
	skills: string[];
	duration: Duration;
	experience: string[];
};

export type Duration = { start: Date; end: Date | 'in-progress' };

export const career: Career[] = [
	{
		company: '주식회사 스탬퍼',
		department: '웹 서비스 개발 FE 팀',
		duration: { start: new Date('2023-03'), end: 'in-progress' },
		intro: [
			'민트스캔 웹 서비스의 프론트앤드 개발과 시계열 데이터를 개발하였습니다.',
			'Nest.js 를 사용해 시계열 데이터를 개발하고 시각화하여 사용자에게 인사이트를 제공하기 위해 노력하고 있습니다.',
			'업무의 효율을 높이는 작업은 개인 뿐 아니라 팀 내에서도 큰 성과를 도출한다고 믿습니다.',
			'자동화 시스템 및 백오피스 운영 도구를 개발한 경험이 있습니다.'
		],
		project: MINTSCAN.projects
	},
	{
		company: '주식회사 스탬퍼 (인턴)',
		department: '웹 서비스 개발 FE 팀 인턴',
		duration: { start: new Date('2022-09'), end: new Date('2023-02') },
		intro: [],
		project: INTERN.projects
	}
];
