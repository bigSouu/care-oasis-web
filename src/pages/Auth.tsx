import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, Loader2, Heart, Shield, Users } from "lucide-react";
import Logo from "@/components/Logo";

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is already authenticated
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate("/");
      }
    };
    checkAuth();
  }, [navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const redirectUrl = `${window.location.origin}/`;

    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          display_name: `${formData.firstName} ${formData.lastName}`,
        },
      },
    });

    if (error) {
      if (error.message.includes("User already registered")) {
        toast({
          title: "Account exists",
          description: "An account with this email already exists. Please sign in instead.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Sign up failed",
          description: error.message,
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Check your email",
        description: "We've sent you a confirmation link to complete your registration.",
      });
    }

    setLoading(false);
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      if (error.message.includes("Invalid login credentials")) {
        toast({
          title: "Sign in failed",
          description: "Invalid email or password. Please check your credentials and try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Sign in failed",
          description: error.message,
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Welcome back!",
        description: "You have been successfully signed in.",
      });
      navigate("/");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4NTFkMWQiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl w-full">
          {/* Left Side - Branding */}
          <div className="hidden lg:flex flex-col justify-center items-center text-center space-y-8 px-8">
            <div className="animate-fade-in">
              <Logo animated={true} />
              <h1 className="text-4xl font-bold text-primary mt-6 mb-4">
                Kaachre Medical Clinic
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Meduma, Ghana - Quality Healthcare Since 2011
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 max-w-md animate-scale-in">
              <div className="glass-effect rounded-2xl p-6 text-center">
                <Heart className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-primary mb-2">Compassionate Care</h3>
                <p className="text-sm text-muted-foreground">
                  Dedicated to providing exceptional healthcare with heart
                </p>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-primary mb-2">Trusted Professionals</h3>
                <p className="text-sm text-muted-foreground">
                  Experienced medical professionals you can trust
                </p>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-primary mb-2">Community Focused</h3>
                <p className="text-sm text-muted-foreground">
                  Serving the Meduma community with excellence
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Authentication Form */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md space-y-6">
              {/* Mobile Logo */}
              <div className="lg:hidden text-center animate-fade-in">
                <Logo animated={true} />
                <h1 className="text-2xl font-bold text-primary mt-4">Kaachre Medical Clinic</h1>
                <p className="text-muted-foreground mt-2">Access your healthcare account</p>
              </div>

              <Card className="clinic-card border-0 bg-card/80 backdrop-blur-sm">
                <CardHeader className="space-y-1 text-center">
                  <CardTitle className="text-2xl font-bold text-primary">Patient Account</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Sign in to your account or register as a patient to book appointments
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Tabs defaultValue="signin" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 bg-muted/50">
                      <TabsTrigger 
                        value="signin" 
                        className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      >
                        Sign In
                      </TabsTrigger>
                      <TabsTrigger 
                        value="signup"
                        className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      >
                        Register
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="signin" className="space-y-4 mt-6">
                      <form onSubmit={handleSignIn} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="signin-email" className="text-foreground font-medium">
                            Email Address
                          </Label>
                          <Input
                            id="signin-email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="h-12 border-border/50 focus:border-primary bg-background/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="signin-password" className="text-foreground font-medium">
                            Password
                          </Label>
                          <div className="relative">
                            <Input
                              id="signin-password"
                              name="password"
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter your password"
                              value={formData.password}
                              onChange={handleInputChange}
                              required
                              className="h-12 pr-12 border-border/50 focus:border-primary bg-background/50"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </div>
                        <Button 
                          type="submit" 
                          className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Signing in...
                            </>
                          ) : (
                            "Sign In to Account"
                          )}
                        </Button>
                      </form>
                    </TabsContent>

                    <TabsContent value="signup" className="space-y-4 mt-6">
                      <form onSubmit={handleSignUp} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName" className="text-foreground font-medium">
                              First Name
                            </Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              type="text"
                              placeholder="First name"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                              className="h-12 border-border/50 focus:border-primary bg-background/50"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName" className="text-foreground font-medium">
                              Last Name
                            </Label>
                            <Input
                              id="lastName"
                              name="lastName"
                              type="text"
                              placeholder="Last name"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                              className="h-12 border-border/50 focus:border-primary bg-background/50"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="signup-email" className="text-foreground font-medium">
                            Email Address
                          </Label>
                          <Input
                            id="signup-email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="h-12 border-border/50 focus:border-primary bg-background/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="signup-password" className="text-foreground font-medium">
                            Password
                          </Label>
                          <div className="relative">
                            <Input
                              id="signup-password"
                              name="password"
                              type={showPassword ? "text" : "password"}
                              placeholder="Create a password"
                              value={formData.password}
                              onChange={handleInputChange}
                              required
                              minLength={6}
                              className="h-12 pr-12 border-border/50 focus:border-primary bg-background/50"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Password must be at least 6 characters long
                          </p>
                        </div>
                        <Button 
                          type="submit" 
                          className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Creating account...
                            </>
                          ) : (
                            "Create Account"
                          )}
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <div className="text-center text-sm text-muted-foreground">
                <p>
                  Need help? Contact us at{" "}
                  <a 
                    href="mailto:kaachreclinic2020@gmail.com" 
                    className="text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    kaachreclinic2020@gmail.com
                  </a>
                </p>
                <p className="mt-2">
                  📞 Call us: <span className="font-medium">0558727124</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;