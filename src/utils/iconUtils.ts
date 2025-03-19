
/**
 * Icon utility functions for consistent icon usage throughout the application
 */

// Get Material Design outlined icon URL by name
export const getMaterialIconUrl = (iconName: string, size: number = 24): string => {
  return `https://fonts.gstatic.com/s/i/materialiconsoutlined/${iconName}/v12/${size}px.svg`;
};

// Standard icon sizes for the application
export const ICON_SIZES = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 40,
  xxl: 48
};

// Helper to get icon size class based on size key or number
export const getIconSizeClass = (size: keyof typeof ICON_SIZES | number): string => {
  if (typeof size === 'number') {
    return `w-[${size}px] h-[${size}px]`;
  }
  
  const pixelSize = ICON_SIZES[size];
  return `w-[${pixelSize}px] h-[${pixelSize}px]`;
};

// Helper to determine if an icon needs inversion for contrast
export const shouldInvertIcon = (bgColor: string): boolean => {
  // Simple check based on background color
  // In a real implementation, you would use color contrast algorithms
  const darkBackgrounds = ['bg-primary', 'bg-slate-800', 'bg-black'];
  return darkBackgrounds.some(color => bgColor.includes(color));
};

// Function to convert snake_case to camelCase for icon names
export const formatIconName = (name: string): string => {
  return name.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
};

// Categories for Material Design icons
export const ICON_CATEGORIES = {
  actions: "Actions",
  alerts: "Alerts & Notifications",
  av: "Audio & Video",
  communication: "Communication",
  content: "Content",
  device: "Device",
  editor: "Editor",
  file: "File",
  hardware: "Hardware",
  home: "Home",
  image: "Image",
  maps: "Maps & Location",
  navigation: "Navigation",
  places: "Places",
  social: "Social",
  toggle: "Toggle"
};

// Function to get category for an icon (simplified implementation)
export const getIconCategory = (iconName: string): string => {
  // This is a simplified implementation
  // In a real app, you would have a complete mapping
  if (iconName.includes('arrow') || iconName.includes('navigate')) return ICON_CATEGORIES.navigation;
  if (iconName.includes('alert') || iconName.includes('notification')) return ICON_CATEGORIES.alerts;
  if (iconName.includes('play') || iconName.includes('volume')) return ICON_CATEGORIES.av;
  if (iconName.includes('message') || iconName.includes('mail')) return ICON_CATEGORIES.communication;
  if (iconName.includes('edit') || iconName.includes('format')) return ICON_CATEGORIES.editor;
  if (iconName.includes('image') || iconName.includes('photo')) return ICON_CATEGORIES.image;
  if (iconName.includes('home')) return ICON_CATEGORIES.home;
  if (iconName.includes('place') || iconName.includes('location')) return ICON_CATEGORIES.places;
  
  // Default to actions category
  return ICON_CATEGORIES.actions;
};

// More complete list of Material Design icons
export const MATERIAL_ICONS = [
  // Navigation icons
  "arrow_back", "arrow_forward", "arrow_upward", "arrow_downward",
  "chevron_left", "chevron_right", "expand_less", "expand_more",
  "menu", "more_vert", "more_horiz", "refresh", "close",
  
  // Action icons
  "search", "home", "settings", "info", "help", "account_circle",
  "check_circle", "add", "edit", "delete", "favorite", "star",
  
  // Communication icons
  "email", "message", "chat", "phone", "call", "contacts",
  
  // Content icons
  "add_circle", "remove_circle", "save", "print", "link", "flag",
  "content_copy", "content_paste", "content_cut", "cloud", "attach_file",
  
  // Alert icons
  "warning", "error", "info_outline", "help_outline", "notification_important",
  
  // AV icons
  "play_arrow", "pause", "stop", "skip_next", "skip_previous", "volume_up",
  "volume_down", "volume_mute", "mic", "videocam",
  
  // Device icons
  "smartphone", "tablet", "laptop", "desktop_windows", "tv", "watch", "battery_full",
  
  // Image icons
  "image", "photo_camera", "photo", "collections", "broken_image", "filter",
  
  // Maps icons
  "place", "map", "my_location", "directions", "navigation",
  
  // File icons
  "folder", "file_upload", "file_download", "cloud_upload", "cloud_download",
  
  // Social icons
  "person", "people", "share", "thumb_up", "thumb_down", "public", "school",
  
  // More commonly used icons
  "shopping_cart", "check", "add_shopping_cart", "favorite_border",
  "lock", "lock_open", "visibility", "visibility_off", "event",
  "calendar_today", "access_time", "alarm", "send", "bookmark",
  "dashboard", "trending_up", "trending_down", "notifications", "person_add",
  "group_add", "bluetooth", "wifi", "cast", "computer", "smartphone",
  "build", "code", "format_list_bulleted", "format_list_numbered",
  "insert_chart", "data_usage", "attachment", "link", "access_alarm",
  "access_alarms", "account_balance", "account_balance_wallet",
  "account_box", "account_child", "account_circle", "autorenew",
  "cached", "camera_alt", "cancel", "chat_bubble", "chat_bubble_outline"
];
