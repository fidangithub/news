import { Box, Container, Typography, styled, Theme } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NewsItemType } from './home/home';

const Root = styled(Container)(({ theme }: { theme: Theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',

	'& .image': {
		height: '500px',
		objectFit: 'cover',
		borderRadius: '10px',
		marginBottom: theme.spacing(6),
		width: '90%',
	},
	'& .content': {
		padding: theme.spacing(0, 10),
		[theme.breakpoints.down('md')]: {
			padding: theme.spacing(0, 4),
		},
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(0, 2),
		},
	},
	'& .link': {
		color: theme.palette.text.primary,
	},
}));

export const NewsDetail: React.FC = () => {
	const [loading, setLoading] = useState(false);
	const { id } = useParams();
	const [news, setNews] = useState<NewsItemType | null>(null);
	console.log(news);

	const fetchData = async () => {
		const url = `https://api.spaceflightnewsapi.net/v4/articles/${id}`;
		try {
			const response = await fetch(url);
			const jsonData = await response.json();
			setNews(jsonData);
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
		return null;
	}

	return (
		<Root>
			<Typography variant="h1" mb={3} width="70%" textAlign="center">
				{news.title}
			</Typography>
			<img src={news.image_url} className="image" />
			<Box className="content">
				<Typography variant="h3" mb={3}>
					{news.summary}
				</Typography>
				<a href={`${news.url}`} target="blank" className="link">
					Learn more...
				</a>
			</Box>
		</Root>
	);
};
