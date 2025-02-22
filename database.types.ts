export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      cabservice: {
        Row: {
          availabilitystatus: string | null
          cabid: number
          contactnumber: string | null
          dateadded: string
          drivercontactnumber: string | null
          drivername: string | null
          licenseplate: string | null
          priceperkm: number | null
          servicename: string
          vehicletype: string | null
        }
        Insert: {
          availabilitystatus?: string | null
          cabid?: never
          contactnumber?: string | null
          dateadded?: string
          drivercontactnumber?: string | null
          drivername?: string | null
          licenseplate?: string | null
          priceperkm?: number | null
          servicename: string
          vehicletype?: string | null
        }
        Update: {
          availabilitystatus?: string | null
          cabid?: never
          contactnumber?: string | null
          dateadded?: string
          drivercontactnumber?: string | null
          drivername?: string | null
          licenseplate?: string | null
          priceperkm?: number | null
          servicename?: string
          vehicletype?: string | null
        }
        Relationships: []
      }
      emergency_contacts: {
        Row: {
          contact_person_details: string | null
          id: number
          inserted_at: string
          local_emergency_numbers: string | null
          user_id: string
        }
        Insert: {
          contact_person_details?: string | null
          id?: never
          inserted_at?: string
          local_emergency_numbers?: string | null
          user_id: string
        }
        Update: {
          contact_person_details?: string | null
          id?: never
          inserted_at?: string
          local_emergency_numbers?: string | null
          user_id?: string
        }
        Relationships: []
      }
      flight: {
        Row: {
          airline: string
          arrivalairport: string | null
          arrivaltime: string | null
          availabilitystatus: string | null
          dateadded: string
          departureairport: string | null
          departuretime: string | null
          duration: number | null
          flightid: number
          flightnumber: string
          price: number | null
        }
        Insert: {
          airline: string
          arrivalairport?: string | null
          arrivaltime?: string | null
          availabilitystatus?: string | null
          dateadded?: string
          departureairport?: string | null
          departuretime?: string | null
          duration?: number | null
          flightid?: never
          flightnumber: string
          price?: number | null
        }
        Update: {
          airline?: string
          arrivalairport?: string | null
          arrivaltime?: string | null
          availabilitystatus?: string | null
          dateadded?: string
          departureairport?: string | null
          departuretime?: string | null
          duration?: number | null
          flightid?: never
          flightnumber?: string
          price?: number | null
        }
        Relationships: []
      }
      hotel: {
        Row: {
          address: string | null
          amenities: string | null
          availabilitystatus: string | null
          city: string | null
          contactnumber: string | null
          country: string | null
          dateadded: string
          emailaddress: string | null
          hotelid: number
          hotelname: string
          imageurl: string | null
          postalcode: string | null
          pricepernight: number | null
          rating: number | null
          roomtype: string | null
          state: string | null
        }
        Insert: {
          address?: string | null
          amenities?: string | null
          availabilitystatus?: string | null
          city?: string | null
          contactnumber?: string | null
          country?: string | null
          dateadded?: string
          emailaddress?: string | null
          hotelid?: never
          hotelname: string
          imageurl?: string | null
          postalcode?: string | null
          pricepernight?: number | null
          rating?: number | null
          roomtype?: string | null
          state?: string | null
        }
        Update: {
          address?: string | null
          amenities?: string | null
          availabilitystatus?: string | null
          city?: string | null
          contactnumber?: string | null
          country?: string | null
          dateadded?: string
          emailaddress?: string | null
          hotelid?: never
          hotelname?: string
          imageurl?: string | null
          postalcode?: string | null
          pricepernight?: number | null
          rating?: number | null
          roomtype?: string | null
          state?: string | null
        }
        Relationships: []
      }
      other_useful_data: {
        Row: {
          health_and_safety_info: string | null
          id: number
          inserted_at: string
          language_preferences: string | null
          user_id: string
        }
        Insert: {
          health_and_safety_info?: string | null
          id?: never
          inserted_at?: string
          language_preferences?: string | null
          user_id: string
        }
        Update: {
          health_and_safety_info?: string | null
          id?: never
          inserted_at?: string
          language_preferences?: string | null
          user_id?: string
        }
        Relationships: []
      }
      payment_information: {
        Row: {
          id: number
          inserted_at: string
          payment_methods: string | null
          transaction_history: string | null
          user_id: string
        }
        Insert: {
          id?: never
          inserted_at?: string
          payment_methods?: string | null
          transaction_history?: string | null
          user_id: string
        }
        Update: {
          id?: never
          inserted_at?: string
          payment_methods?: string | null
          transaction_history?: string | null
          user_id?: string
        }
        Relationships: []
      }
      touristplace: {
        Row: {
          address: string
          category: string | null
          city: string | null
          contactnumber: string | null
          country: string | null
          dateadded: string
          description: string | null
          entryfee: number | null
          imageurl: string | null
          latitude: number | null
          longitude: number | null
          name: string
          openinghours: string | null
          placeid: number
          popularityrating: number | null
          postalcode: string | null
          state: string | null
          websiteurl: string | null
        }
        Insert: {
          address: string
          category?: string | null
          city?: string | null
          contactnumber?: string | null
          country?: string | null
          dateadded?: string
          description?: string | null
          entryfee?: number | null
          imageurl?: string | null
          latitude?: number | null
          longitude?: number | null
          name: string
          openinghours?: string | null
          placeid?: never
          popularityrating?: number | null
          postalcode?: string | null
          state?: string | null
          websiteurl?: string | null
        }
        Update: {
          address?: string
          category?: string | null
          city?: string | null
          contactnumber?: string | null
          country?: string | null
          dateadded?: string
          description?: string | null
          entryfee?: number | null
          imageurl?: string | null
          latitude?: number | null
          longitude?: number | null
          name?: string
          openinghours?: string | null
          placeid?: never
          popularityrating?: number | null
          postalcode?: string | null
          state?: string | null
          websiteurl?: string | null
        }
        Relationships: []
      }
      train: {
        Row: {
          arrivalstation: string | null
          arrivaltime: string | null
          availabilitystatus: string | null
          dateadded: string
          departurestation: string | null
          departuretime: string | null
          duration: number | null
          price: number | null
          trainid: number
          trainname: string
          trainnumber: string
        }
        Insert: {
          arrivalstation?: string | null
          arrivaltime?: string | null
          availabilitystatus?: string | null
          dateadded?: string
          departurestation?: string | null
          departuretime?: string | null
          duration?: number | null
          price?: number | null
          trainid?: never
          trainname: string
          trainnumber: string
        }
        Update: {
          arrivalstation?: string | null
          arrivaltime?: string | null
          availabilitystatus?: string | null
          dateadded?: string
          departurestation?: string | null
          departuretime?: string | null
          duration?: number | null
          price?: number | null
          trainid?: never
          trainname?: string
          trainnumber?: string
        }
        Relationships: []
      }
      travelpackage: {
        Row: {
          accommodationdetails: string | null
          activities: string | null
          dateadded: string
          description: string | null
          destination: string | null
          durationdays: number | null
          exclusions: string | null
          imageurl: string | null
          inclusions: string | null
          packageid: number
          packagename: string
          packagetype: string | null
          price: number | null
          rating: number | null
        }
        Insert: {
          accommodationdetails?: string | null
          activities?: string | null
          dateadded?: string
          description?: string | null
          destination?: string | null
          durationdays?: number | null
          exclusions?: string | null
          imageurl?: string | null
          inclusions?: string | null
          packageid?: never
          packagename: string
          packagetype?: string | null
          price?: number | null
          rating?: number | null
        }
        Update: {
          accommodationdetails?: string | null
          activities?: string | null
          dateadded?: string
          description?: string | null
          destination?: string | null
          durationdays?: number | null
          exclusions?: string | null
          imageurl?: string | null
          inclusions?: string | null
          packageid?: never
          packagename?: string
          packagetype?: string | null
          price?: number | null
          rating?: number | null
        }
        Relationships: []
      }
      user_information: {
        Row: {
          address: string | null
          email_address: string | null
          id: number
          inserted_at: string
          mobile_number: string | null
          name: string
          profile_picture: string | null
          user_id: string
        }
        Insert: {
          address?: string | null
          email_address?: string | null
          id?: never
          inserted_at?: string
          mobile_number?: string | null
          name: string
          profile_picture?: string | null
          user_id: string
        }
        Update: {
          address?: string | null
          email_address?: string | null
          id?: never
          inserted_at?: string
          mobile_number?: string | null
          name?: string
          profile_picture?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
