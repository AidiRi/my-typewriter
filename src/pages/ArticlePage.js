//Functional
import { useParams } from 'react-router-dom';
import articles from './article-content.js';

const ArticlePage = () => {
	const { articleId } = useParams();
	// Destructuring of:
	// 	const params = useParams();
	// 	const articleId = params.articleId;

	const article = articles.find(article => article.name === articleId);
	// Best way to display code?: explicit/content jsx INSIDE return || implicit/content jsx OUTSIDE return??
	const content = article => {
		return article.content.map(paragraph => (
			<p>{paragraph}</p>
		));
	};

	return (
		<>
			<h1>{article.title}</h1>
			{content(article)}
		</>
		);
}

export default ArticlePage;