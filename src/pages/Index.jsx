import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [promocode, setPromocode] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [problem, setProblem] = useState("");
  const [problemsList, setProblemsList] = useState("");
  const [foundOut, setFoundOut] = useState("");

  const handlePromocodeChange = (e) => setPromocode(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePositionChange = (e) => setPosition(e.target.value);
  const handleProblemChange = (e) => setProblem(e.target.value);
  const handleProblemsListChange = (e) => setProblemsList(e.target.value);
  const handleFoundOutChange = (e) => setFoundOut(e.target.value);

  return (
    <div className="p-4 space-y-8">
      {/* Block #1 - e-selling of 1 guide */}
      <Card>
        <CardHeader>
          <CardTitle>Buy Our Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={() => window.location.href = "https://example.com/buy"}>Buy Now</Button>
        </CardContent>
      </Card>

      <Separator />

      {/* Block #2 - Promocode window */}
      <Card>
        <CardHeader>
          <CardTitle>Enter Promocode</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            value={promocode}
            onChange={handlePromocodeChange}
            maxLength={7}
            placeholder="Enter your promocode"
          />
        </CardContent>
      </Card>

      <Separator />

      {/* Block #3 - Request for individual analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Request Individual Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="email">Corporate Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your corporate email"
            />
          </div>
          <div>
            <Label htmlFor="position">Your Position</Label>
            <Input
              id="position"
              type="text"
              value={position}
              onChange={handlePositionChange}
              maxLength={50}
              placeholder="Enter your position"
            />
          </div>
          <div>
            <Label htmlFor="problem">What Problem You Want to Solve</Label>
            <Textarea
              id="problem"
              value={problem}
              onChange={handleProblemChange}
              maxLength={100}
              placeholder="Describe the problem you want to solve"
            />
          </div>
          <div>
            <Label htmlFor="problemsList">List of Problems That Caused the Request</Label>
            <Textarea
              id="problemsList"
              value={problemsList}
              onChange={handleProblemsListChange}
              maxLength={300}
              placeholder="List the problems that caused the request"
            />
          </div>
          <div>
            <Label htmlFor="foundOut">How You Found Out</Label>
            <Input
              id="foundOut"
              type="text"
              value={foundOut}
              onChange={handleFoundOutChange}
              maxLength={50}
              placeholder="How did you find out about us?"
            />
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Block #4 - Info of Ecological Leadership Method founder */}
      <Card>
        <CardHeader>
          <CardTitle>What Makes Me Different?</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Founder of the Ecological Leadership Method, with a unique approach to sustainable business practices.</p>
        </CardContent>
      </Card>

      <Separator />

      {/* Block #5 - User Agreement */}
      <Card>
        <CardHeader>
          <CardTitle>User Agreement</CardTitle>
        </CardHeader>
        <CardContent>
          <a href="/path/to/user-agreement.pdf" download>Download User Agreement</a>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;