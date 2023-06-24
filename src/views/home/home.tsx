import { Theme } from '@mui/system';
import { Box, Container, Grid, Typography, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from '../../components';

export type NewsItemType = {
	events: any[]; // Update the type as per the actual structure of the 'events' array
	featured: boolean;
	id: number;
	image_url: string;
	launches: any[]; // Update the type as per the actual structure of the 'launches' array
	news_site: string;
	published_at: string;
	summary: string;
	title: string;
	updated_at: string;
	url: string;
};

const Root = styled(Container)(({ theme }: { theme: Theme }) => ({
	'& .wrapper': {
		padding: theme.spacing(0, 16),
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(0),
		},
	},
	'& .news-item': {
		width: '100%',
		height: '180px',
		backgroundColor: 'white',
		borderRadius: '16px',
		background: 'linear-gradient(134deg, #FACC15 0%, #EA580C 100%)',
		position: 'relative',
		[theme.breakpoints.down('sm')]: {
			width: '70%',
			margin: '0 auto',
		},
	},

	'& .title': {
		padding: theme.spacing(0, 3),
		position: 'absolute',
		fontWeight: '700',
		width: '90%',
		top: '40%',
		transform: 'translateY(-50%)',
		color: 'rgba(255, 255, 255)',
	},
}));

const linears = [
	'linear-gradient(134deg, #FACC15 0%, #EA580C 100%)',
	'linear-gradient(134deg, #D8B4FE 0%, #3B82F6 100%)',
	'linear-gradient(134deg, #10B981 0%, #4F46E5 100%)',
	'linear-gradient(134deg, #3B82F6 0%, #1D4ED8 100%)',
	'linear-gradient(134deg, #D4D4D4 0%, #64748B 100%)',
];

export const Home: React.FC = () => {
	const [loading, setLoading] = useState(false);
	const [news, setNews] = useState<NewsItemType[] | null>(null);

	const fetchData = async () => {
		const url = `https://api.spaceflightnewsapi.net/v4/articles/?limit=40&title_contains=NASA`;
		try {
			const response = await fetch(url);
			const jsonData = await response.json();
			setNews(jsonData.results);
		} catch (e) {
			console.log(e);
		}
		setLoading(false);
	};

	useEffect(() => {
		setLoading(true);
		fetchData();
	}, []);

	if (loading) {
		return <Typography variant="h1">Loading...</Typography>;
	}
	if (!news) {
		return <Typography variant="h1">Something went wrong...</Typography>;
	}

	return (
		<Root>
			<Box className="wrapper">
				<Typography variant="h1" align="center" mb={3}>
					Get the latest space news
				</Typography>
				<Typography variant="h3" align="center" mb={12}>
					Read the latest space news and interesting articles on astronomy,
					space exploration, NASA research, astrophysics, and new Hubble images.
				</Typography>
				<Grid container spacing={2}>
					{news.map((newsItem, index) => (
						<Grid item xs={12} sm={6} md={4} key={newsItem.id}>
							<Link to={`news/${newsItem.id}`}>
								<Box
									className="news-item"
									style={{
										background: index < 4 ? linears[index] : linears[index % 4],
									}}
								>
									<Typography className="title">{newsItem.title}</Typography>
								</Box>
							</Link>
						</Grid>
					))}
				</Grid>
			</Box>
		</Root>
	);
};
