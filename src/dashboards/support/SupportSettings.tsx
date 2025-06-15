
import React, { useState } from 'react';
import { Clock, Bell, Users, MessageCircle, Save } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const SupportSettings: React.FC = () => {
  const { toast } = useToast();
  
  // Response Time Settings
  const [responseTime, setResponseTime] = useState("2");
  const [escalationThreshold, setEscalationThreshold] = useState("24");
  const [autoEscalate, setAutoEscalate] = useState(true);

  // Notification Settings
  const [newTicketNotifications, setNewTicketNotifications] = useState(true);
  const [highPriorityAlerts, setHighPriorityAlerts] = useState(true);
  const [dailySummaryEmail, setDailySummaryEmail] = useState(false);
  const [escalationAlerts, setEscalationAlerts] = useState(true);

  // Team Settings
  const [defaultAssignee, setDefaultAssignee] = useState("auto-assign");
  const [maxTicketsPerAgent, setMaxTicketsPerAgent] = useState("20");
  const [roundRobinAssignment, setRoundRobinAssignment] = useState(true);

  // Communication Settings
  const [sendConfirmationEmails, setSendConfirmationEmails] = useState(true);
  const [enableCustomerRatings, setEnableCustomerRatings] = useState(true);
  const [autoResponseTemplate, setAutoResponseTemplate] = useState("Thank you for contacting support. We have received your request and will respond within 2 hours during business hours.");

  const handleSaveSettings = () => {
    // Here you would typically save to a backend
    console.log('Saving settings:', {
      responseTime,
      escalationThreshold,
      autoEscalate,
      newTicketNotifications,
      highPriorityAlerts,
      dailySummaryEmail,
      escalationAlerts,
      defaultAssignee,
      maxTicketsPerAgent,
      roundRobinAssignment,
      sendConfirmationEmails,
      enableCustomerRatings,
      autoResponseTemplate
    });

    toast({
      title: "Settings Saved",
      description: "Support settings have been updated successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Support Settings</h1>
        <Button onClick={handleSaveSettings} className="flex items-center space-x-2">
          <Save className="h-4 w-4" />
          <span>Save Settings</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Clock className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Response Time Settings</h3>
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="responseTime">Target response time (hours)</Label>
              <Input
                id="responseTime"
                type="number"
                value={responseTime}
                onChange={(e) => setResponseTime(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="escalationThreshold">Escalation threshold (hours)</Label>
              <Input
                id="escalationThreshold"
                type="number"
                value={escalationThreshold}
                onChange={(e) => setEscalationThreshold(e.target.value)}
                className="mt-1"
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="autoEscalate" className="text-sm">Auto-escalate overdue tickets</Label>
              <Switch
                id="autoEscalate"
                checked={autoEscalate}
                onCheckedChange={setAutoEscalate}
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Bell className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Notification Settings</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="newTicketNotifications" className="text-sm">New ticket notifications</Label>
              <Switch
                id="newTicketNotifications"
                checked={newTicketNotifications}
                onCheckedChange={setNewTicketNotifications}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="highPriorityAlerts" className="text-sm">High priority alerts</Label>
              <Switch
                id="highPriorityAlerts"
                checked={highPriorityAlerts}
                onCheckedChange={setHighPriorityAlerts}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="dailySummaryEmail" className="text-sm">Daily summary email</Label>
              <Switch
                id="dailySummaryEmail"
                checked={dailySummaryEmail}
                onCheckedChange={setDailySummaryEmail}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="escalationAlerts" className="text-sm">Escalation alerts</Label>
              <Switch
                id="escalationAlerts"
                checked={escalationAlerts}
                onCheckedChange={setEscalationAlerts}
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Team Settings</h3>
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="defaultAssignee">Default assignee</Label>
              <Select value={defaultAssignee} onValueChange={setDefaultAssignee}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="auto-assign">Auto-assign</SelectItem>
                  <SelectItem value="sarah-johnson">Sarah Johnson</SelectItem>
                  <SelectItem value="mike-davis">Mike Davis</SelectItem>
                  <SelectItem value="emma-wilson">Emma Wilson</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="maxTicketsPerAgent">Maximum tickets per agent</Label>
              <Input
                id="maxTicketsPerAgent"
                type="number"
                value={maxTicketsPerAgent}
                onChange={(e) => setMaxTicketsPerAgent(e.target.value)}
                className="mt-1"
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="roundRobinAssignment" className="text-sm">Round-robin assignment</Label>
              <Switch
                id="roundRobinAssignment"
                checked={roundRobinAssignment}
                onCheckedChange={setRoundRobinAssignment}
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <MessageCircle className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Communication Settings</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="sendConfirmationEmails" className="text-sm">Send confirmation emails</Label>
              <Switch
                id="sendConfirmationEmails"
                checked={sendConfirmationEmails}
                onCheckedChange={setSendConfirmationEmails}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="enableCustomerRatings" className="text-sm">Enable customer ratings</Label>
              <Switch
                id="enableCustomerRatings"
                checked={enableCustomerRatings}
                onCheckedChange={setEnableCustomerRatings}
              />
            </div>
            <div>
              <Label htmlFor="autoResponseTemplate">Auto-response template</Label>
              <Textarea
                id="autoResponseTemplate"
                value={autoResponseTemplate}
                onChange={(e) => setAutoResponseTemplate(e.target.value)}
                className="mt-1"
                rows={4}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSettings;
