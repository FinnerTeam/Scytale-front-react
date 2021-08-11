import Card from "@material-ui/core/Card";

const PullReqCard = (props: any) => {
  const { title, status, author, createdAt, labels, description } = props;
  return (
    <Card>
      <h2>{title}</h2>
      <span>{status}</span>
      <p>{description}</p>
      <span>{author}</span>
      <span>created at: {createdAt}</span>
      <div>
        {labels.map((label: string) => (
          <span>{label}</span>
        ))}
      </div>
    </Card>
  );
};

export default PullReqCard;
