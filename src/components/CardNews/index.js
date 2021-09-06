import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';

function Star(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 47.94 47.94"
      {...props}
    >
      <path
        d="M26.285 2.486l5.407 10.956a2.58 2.58 0 001.944 1.412l12.091 1.757c2.118.308 2.963 2.91 1.431 4.403l-8.749 8.528a2.582 2.582 0 00-.742 2.285l2.065 12.042c.362 2.109-1.852 3.717-3.746 2.722l-10.814-5.685a2.585 2.585 0 00-2.403 0l-10.814 5.685c-1.894.996-4.108-.613-3.746-2.722l2.065-12.042a2.582 2.582 0 00-.742-2.285L.783 21.014c-1.532-1.494-.687-4.096 1.431-4.403l12.091-1.757a2.58 2.58 0 001.944-1.412l5.407-10.956c.946-1.919 3.682-1.919 4.629 0z"
        fill="#ed8a19"
      />
    </svg>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    width: 400,
    margin: 'auto',
    boxShadow: 'none',
    borderRadius: 30,
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

/*interface CardNews {
  hasImg?:boolean;
  srcImg: string;
  width?: number;
  hasTitle?: boolean;
  title: string;
  hasDescription?: boolean;
  description: string;
  hasStars?: boolean;
  hasLink?: boolean;
  borderRadius?: number;
}*/

/*defaultProps {
  width: 400,
  borderRadius: 30,
  hasTitle: false,
  hasStars: false,
  hasImg: false,
  hasLink: false,
}*/
export const NewsCardDemo = React.memo(function NewsCard(props) {
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const shadowStyles = useBouncyShadowStyles();
  const n = 6;

  return (
    <>
      <Card className={cx(styles.root, shadowStyles.root)}>
        <CardMedia
          classes={mediaStyles}
          image={props.Waifu}
          style={{ border: '1px solid black', paddingBottom: '125%' }}
        />
        <CardContent
          className={styles.content}
          style={{ border: '1px solid black', height: '' }}
        >
          {' '}
          <strong style={{ fontFamily: 'sans-serif' }}>
            {props.rarity} -{' '}
          </strong>
          {[...Array(props.Stars)].map((e, i) => (
            <span key={i}>
              <Star height="20px" />
            </span>
          ))}
          <TextInfoContent
            classes={textCardContentStyles}
            //overline={"March 20, 2019"}
            heading={props.Title}
            body={props.Description}
          />
          <Button color={'primary'} fullWidth className={styles.cta}>
            <a href={props.link}>
              {' '}
              Find Out More <ChevronRightRounded />
            </a>
          </Button>
        </CardContent>
      </Card>
    </>
  );
});

export default NewsCardDemo;
