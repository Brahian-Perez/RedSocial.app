function AuthCard({titulo, children}){
    return(
        <div className="w3-card-4 w3-round-xlarge w3-white">
      <div className="w3-container w3-theme-d2 w3-round-xlarge w3-padding-16">
        <h2 className="w3-center">{titulo}</h2>
      </div>
      {children}
    </div>
    );
}
export default AuthCard;