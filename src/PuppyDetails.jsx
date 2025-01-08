const PuppyDetails = ({ puppy }) => {
  return (
    <div>
     <h2>{puppy.name}</h2>
      <p>Email: {puppy.email}</p>
      <p>Age: {puppy.age}</p>
      <p>Cute {puppy.cute}</p>
    </div>
  );
};

export default PuppyDetails;